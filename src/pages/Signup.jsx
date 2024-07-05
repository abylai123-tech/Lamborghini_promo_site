import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import './styles/login.css';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return alert('Please enter a valid email address');
    }

    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.id) {
      navigate('/login');
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <Header />
      <div className='authorization'>
        <div className="wrapper">
          <div className="title-text">
            <div className="title signup">Регистрация</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form onSubmit={handleSubmit} className="signup">
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
                <div className="field">
                  <input 
                    type="password" 
                    placeholder="Confirm password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Зарегистрироваться" />
                </div>
                <div className="signup-link">
                  Уже есть аккаунт?{' '}
                  <Link to="/login">Войти</Link>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
