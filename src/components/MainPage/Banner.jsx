import React from 'react';
import "../styles/Banner.css";
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div id='mainBanner' className='banner'>
      <div className='bannerText'>
        DARE TO LIVE MORE<br />
        <span>U R U S &nbsp;S E</span>
        <div className='bannerBtn'>
        <Link to='/models'>
          <svg xmlns="http://www.w3.org/2000/svg" width={90} viewBox="0 0 50.464 58.271">
            <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
              <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" className="hexagon"></path>
              <path className="icon" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path>
            </g>
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
};
