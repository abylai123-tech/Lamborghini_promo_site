import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Profile } from './pages/Profile';
import { Models } from './pages/Models';
import { History } from './pages/History'; // Добавим правильный импорт
import {NewsPage} from './pages/NewsPage'
import Shop from './pages/Shop';
import { ModelPage } from './pages/ModelPage';
import { NewsItem } from './pages/NewsItem';
import { Payment } from './pages/Payment';
import './App.css';
import { Cart } from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path='/models' element={<Models />} /> 
      <Route path='/models/:modelId' element={<ModelPage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/news/:newsId' element={<NewsItem />} />
      <Route path='/history' element={<History />} /> {/* Используем компонент History */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
            <Profile />
        }
      />
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
