import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { NewsBanner } from '../components/News/NewsBanner';
import { NewsElem } from '../components/News/NewsElem';

import './styles/News.css'

export const NewsPage = () => {

  const news = useSelector(state => state.newsSlice.news);

  return (
    <>
      <Header />
      <NewsBanner />
      <div id='news'>
      {news.map((item, index) => (
        <NewsElem item={item} key={index} />
      ))}
      </div>
      
    </>
  );
};



