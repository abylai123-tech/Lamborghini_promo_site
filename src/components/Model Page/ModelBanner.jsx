import React from 'react';
import "../styles/Banner.css";

export const ModelBanner = ({ model }) => {
  console.log(model);
  return (
    <div id='newsBanner' className='banner modelBanner' style={{ backgroundImage: `url(${model.backgroundImage})` }}>
      <div className='bannerText'>
        {model.title}
        <br /><span>{model.slogan}</span>
      </div>
      <div id='characteristics'>
        <div id='power' className='characteristic'>
          <span >мощность (комбинированный ICE+EE)</span><br />
          {model.power}
        </div>
        <div id="maxSpeed" className='characteristic'>
          <span>МАКСИМАЛЬНАЯ СКОРОСТЬ</span><br />
          {model.maxSpeed} км/ч
        </div>
        <div id="kmh" className='characteristic'>
          <span>0-100 км/ч</span><br />
          {model.kmh}c
        </div>
      </div>
    </div>
  );
};
