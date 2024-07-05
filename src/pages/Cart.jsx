import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useSelector } from 'react-redux';
import { CartItem } from '../components/Cart/CartItem';
import { useNavigate } from 'react-router-dom';
import './styles/Cart.css';

export const Cart = () => {
    const items = useSelector(state => state.cartSlice.cartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemsAmount, setItemsAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let total = 0;
        let itemAmount = 0;

        items.forEach(item => {
            total += item.price * item.quantity;
            itemAmount += item.quantity;
        });

        setTotalPrice(total);
        setItemsAmount(itemAmount);
    }, [items]);

    const handleOrder = () => {
        navigate('/payment');
    };

    return (
        <>
            <Header />
            <div id="cart">
                <h1>Корзина</h1>
                <div id="cartItems">
                    {items.length ? (
                        items.map(item => <CartItem key={item.id} item={item} />)
                    ) : (
                        <p className="empty-description">Ваша корзина пуста</p>
                    )}
                </div>
                <h2>Общая сумма: {totalPrice} &#36;</h2>
                <h3>Количество товаров: {itemsAmount}</h3>
                <button className='submit-button' onClick={handleOrder}>Заказать</button>
            </div>
        </>
    );
};
