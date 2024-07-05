import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import './styles/login.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.userId) {
            localStorage.setItem('token', data.userId);
            navigate('/profile');
        } else {
            alert(data.error);
        }
    };

    return (
        <>
            <Header />
            <div className="authorization">
                <div className="wrapper">
                    <div className="title-text">
                        <div className="title login">Форма входа в систему</div>
                    </div>
                    <div className="form-container">
                        <div className="form-inner">
                            <form onSubmit={handleSubmit} className="login">
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Войти в систему" />
                                </div>
                                <div className="signup-link">
                                    Нету аккаунта?{' '}
                                    <Link to="/signup">Зарегистрируйтесь сейчас!</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
