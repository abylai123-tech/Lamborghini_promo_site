import React, { useState, useEffect } from 'react';
import { ModelsBanner } from '../components/Models/ModelsBanner';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import './styles/Models.css';

import { addToCart } from "../redux/slices/cartSlice"

export const Models = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);

  const dispatch = useDispatch();

  const models = useSelector(state => state.modelsSlice.models);

  useEffect(() => {
    const filtered = models.filter(model =>
      model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredModels(filtered);
  }, [searchTerm, models]);

  const handleSearchClick = () => {
    const searchInput = document.getElementById('searchInput');
    setSearchTerm(searchInput.value);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToCart = (model) => {
    if (localStorage.getItem('token') !== null) {
      dispatch(addToCart(model));
    } else {
      alert("Вам нужно авторизоваться прежде чем совершать покупки");
      navigate('/login');
    }
  };

  return (
    <>
      <Header />
      <ModelsBanner />
      <div id="modelsSection">
        <button className="backButton" onClick={handleBackClick}>
          Назад на главную
        </button>
        <input
          type="text"
          id="searchInput"
          placeholder="Поиск моделей..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="searchButton" onClick={handleSearchClick}>
          Найти
        </button>
        {filteredModels.map(model => (
          <div key={model.id} className="modelSegment" id={model.title}>
            <div className="modelImage">
              <img src={model.images[0]} alt={model.title} />
            </div>
            <div className="modelInfo">
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <div className="modelBtn">
                <Link to={`/models/${model.id}`}>
                  <button className="styledArrowButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} viewBox="0 0 50.464 58.271">
                      <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
                        <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="hexagon"></path>
                        <path className="icon" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
                      </g>
                    </svg>
                  </button>
                </Link>
              </div>
              <div className='button_buy'>
                <button className='buy_button' onClick={() => handleAddToCart(model)}>Купить</button>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
