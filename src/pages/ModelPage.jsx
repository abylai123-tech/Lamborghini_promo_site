import React from 'react';
import { ModelBanner } from '../components/Model Page/ModelBanner';
import { Header } from '../components/Header';
import './styles/ModelPage.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ModelPage = () => {
  const { modelId } = useParams();
  const models = useSelector(state => state.modelsSlice.models);
  const model = models.find(model => model.id === modelId);

  if (!model) {
    return <div>Модель не найдена</div>; // Обработка ситуации, если модель не найдена
  }

  return (
    <>
      <Header />
      <ModelBanner model={model} />
      <div id='overview'>
        <div id='overviewImage'>
          <img src={model.images[1]} alt="Model" />
        </div>
        <div id="overviewText">
          <h2>ОБЗОР</h2>
          <p>{model.overview}</p>
        </div>
      </div>
      <div id='exterior'>
        <div id='exteriorText'>
          <h2>ЭКСТЕРЬЕР</h2>
          <p>
            {model.exterior}
          </p>
        </div>
        <div id='exteriorImages'>
          {model.images.slice(3, 5).map((src, index) => (
            <div key={index} className='exteriorImage'>
              <img src={src} alt={`Exterior view ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
