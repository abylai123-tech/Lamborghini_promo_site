import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './styles/Profile.css';
import PurchasedItem from './PurchasedItem';
import { useSelector } from 'react-redux';

export const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const products = useSelector(state => state.shopSlice.merch);
    const models = useSelector(state => state.modelsSlice.models);

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('token');
            if (!userId) {
                navigate('/login');
                return;
            }
            try {
                const response = await fetch(`http://localhost:3000/profile?userId=${userId}`);
                if (!response.ok) {
                    throw new Error('Не получилось взять данные user');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Ошибка при получении данных user:', error);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const getProductDetails = (productId) => {
        const product = products.find(product => product.id === productId) || models.find(product => product.id === productId);
        return product
    };
    console.log(user);

    return (
        <>
            <Header />
            <div id='profile'>
                {!user ? (
                    <div>Загрузка...</div>
                ) : (
                    <>
                        <h1>Привет, <span className="user-email">{user.email}</span></h1>
                        <button onClick={handleLogout}>Выйти</button>
                        {user.orders && user.orders.length > 0 && (
                            <div className="purchased-items-container">
                                <h2>Купленные товары:</h2>
                                <p>Всего товаров: {user.orders.length}</p>
                                <div className="purchased-items-grid">
                                    {user.orders.map(order => (
                                        order.products.map(product => {
                                            const productDetails = getProductDetails(product.id);
                                            return (
                                                <PurchasedItem
                                                    key={product.id}
                                                    item={productDetails}
                                                    quantity={product.quantity}
                                                />
                                            );
                                        })
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};