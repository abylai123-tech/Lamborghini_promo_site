import React from 'react';
import '../styles/Lambo.css';
import { Link } from 'react-router-dom';

const Lambo = () => {
  return (
    <div className="lamborghini-huracan-sto">
      <div className="text-section">
        <div className="header">
          <p>ПОСЕТИТЕ МАГАЗИН</p>
        </div>
        <div className="styledArrow">
          <button className="styledButton">
          <Link to='/shop'>
            <svg xmlns="http://www.w3.org/2000/svg" width={60} viewBox="0 0 50.464 58.271">
              <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
                <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="hexagon"></path>
                <path className="icon" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
              </g>
            </svg>
          </Link>
          </button>
        </div>
      </div>
      <div className="car">
        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/store/2024/banner/store_banner_01.png" alt="Lamborghini Huracan STO" />
      </div>
    </div>
  );
};

export default Lambo;
