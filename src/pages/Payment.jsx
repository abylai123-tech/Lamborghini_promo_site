import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import IMask from 'imask';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import './styles/Payment.css';

export const Payment = () => {
    const cardNumberRef = useRef(null);
    const expirationDateRef = useRef(null);
    const cvvRef = useRef(null);
    const nameRef = useRef(null); // Поле для имени
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartSlice.cartItems);
    const navigate = useNavigate();

    useEffect(() => {
        const cardNumberMask = IMask(cardNumberRef.current, {
            mask: '0000 0000 0000 0000',
            lazy: false,
        });

        const expirationDateMask = IMask(expirationDateRef.current, {
            mask: 'MM/YY',
            lazy: false,
            blocks: {
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                },
                YY: {
                    mask: IMask.MaskedRange,
                    from: new Date().getFullYear() % 100,
                    to: 99,
                },
            },
        });

        const cvvMask = IMask(cvvRef.current, {
            mask: '000',
            lazy: false,
        });

        return () => {
            cardNumberMask.destroy();
            expirationDateMask.destroy();
            cvvMask.destroy();
        };
    }, []);

    const extractDigits = (input) => input.replace(/\D/g, '');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const cardNumber = extractDigits(cardNumberRef.current.value);
        const expirationDate = extractDigits(expirationDateRef.current.value);
        const cvv = extractDigits(cvvRef.current.value);
        const name = nameRef.current.value;
    
        if (cardNumber.length !== 16) {
            setMessage('Введите правильный номер карты.');
            return;
        }
    
        if (expirationDate.length !== 4 || !/^\d{4}$/.test(expirationDate)) {
            setMessage('Введите правильно срок годности карты (MM/YY).');
            return;
        }
    
        if (cvv.length !== 3) {
            setMessage('Введите правильный CVV');
            return;
        }
    
        const formData = {
            userId: localStorage.getItem('token'),
            totalAmount: calculateTotalAmount(),
            products: cartItems.map(item => ({ id: item.id, quantity: item.quantity }))
        };
    
        try {
            const response = await fetch('http://localhost:3000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('Запрос не удался');
            }
    
            dispatch(clearCart());
            setMessage('Платёж удался. Спасибо за покупку');
        } catch (error) {
            setMessage('Не получилось произвести платеж');
        }
    };
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Header />
            <div id="payment">
                <div>
                    <div className="payment-title">
                    Форма оплаты
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form-group">
                        <label htmlFor="name">Имя владельца карты</label>
                        <input type="text" id="name" ref={nameRef} required />
                        </div>

                        <div className="form-group">
                        <label htmlFor="cardnumber">Номер карты</label>
                        <input type="text" id="cardnumber" ref={cardNumberRef} required />
                        </div>

                        <div className="form-group form-group--small">
                        <label htmlFor="expirationdate">Срок действия</label>
                        <input type="text" id="expirationdate" ref={expirationDateRef} required />
                        </div>

                        <div className="form-group form-group--small">
                        <label htmlFor="securitycode">CVV</label>
                        <input type="text" id="securitycode" ref={cvvRef} required />
                        </div>

                        <div className="form-group">
                        <button type="submit" className="submit-button">Подтвердить</button>
                        </div>
                    </div>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </>
    );
};
