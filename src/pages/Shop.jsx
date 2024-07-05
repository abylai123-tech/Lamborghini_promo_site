import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import './styles/Shop.css';

const Shop = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [hoveredImageIndex, setHoveredImageIndex] = useState({});
  const merch = useSelector(state => state.shopSlice.merch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = ['Аксессуары', 'Одежда', 'Коллекционки']; 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (!merch) {
    return <div>Загрузка...</div>;
  }

  const images = [
    { 
      src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto.jpg', 
      alt: 'Lamborghini Revuelto', 
      header: 'REVUELTO', 
      text: 'FROM NOW ON' 
    },
    { 
      src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/11_30_sterrato/family_chooser_sterrato.jpg', 
      alt: 'Lamborghini Huracan Evo Spyder', 
      header: 'HURACAN', 
      text: 'BEYOND THE CONCRETE' 
    },
    { 
      src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2024/family/family_d.jpeg', 
      alt: 'Lamborghini Urus', 
      header: 'URUS', 
      text: 'DARE TO LIVE MORE' 
    },
  ];  

  const nextSlide = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide - 1 + images.length) % images.length);
  };

  const handleAddToCart = (item) => {
    if (localStorage.getItem('token') !== null) {
      dispatch(addToCart(item));  
    } else {
      alert("Вам нужно авторизоваться прежде чем совершать покупки");
      navigate('/login');
    }
  };

  return (
    <>
      <Header />
      <div className="slider">
        <div className="slider-inner" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.src} alt={image.alt} />
              <div className="slide-content">
                <div className="slider-title">МОДЕЛЬ</div>
                <div className="slide-header">{image.header}</div>
                <div className="slide-text">{image.text}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="prev" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width={90} viewBox="0 0 50.464 58.271">
            <g strokeWidth="1" transform="translate(-1624 -187.923)">
              <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="hexagon on-dark"></path>
              <path className="icon on-dark" d="M0 5.675L7.432 0l7.432 5.675" transform="rotate(-90 935.432 -711.068)"></path>
            </g>
          </svg>
        </button>
        <button className="next" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width={90} viewBox="0 0 50.464 58.271">
            <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
              <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="hexagon"></path>
              <path className="icon" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
            </g>
          </svg>
        </button>

        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="shop-container">
        <h2 className="shop-category-title">Категория товаров</h2>
        <div className="shop-categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`shop-category ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-items">
          {merch
            .filter(item => !selectedCategory || item.category === selectedCategory)
            .map((item) => (
              <div key={item.id} className="shop-item">
                <img
                  src={hoveredImageIndex[item.id] || item.images[0]} 
                  alt={item.title}
                  className="shop-item-image"
                  onMouseEnter={() => setHoveredImageIndex((prev) => ({ ...prev, [item.id]: item.images[1] }))} 
                  onMouseLeave={() => setHoveredImageIndex((prev) => ({ ...prev, [item.id]: item.images[0] }))} 
                />
                <div className="shop-item-details">
                  <h2 className="shop-item-title">{item.title}</h2>
                  <p className="shop-item-price">{item.price} $</p>
                  <p className="shop-item-category">{item.category}</p>
                  <button
                    className='addToCartBtn'
                    onClick={() => handleAddToCart(item)}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
