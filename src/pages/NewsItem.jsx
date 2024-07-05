import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/NewsItem.css'
import { Header } from '../components/Header';


export const NewsItem = () => {
    const { newsId } = useParams();
    const news = useSelector(state => state.newsSlice.news);
    const newsItem = news.find(newsItem => newsItem.id === Number(newsId));
  return (
    <>
        <Header />
        <div id='newsItem'>
            <h1>{newsItem.title}</h1>
            <div id='newsItem-image'>
                <img src={newsItem.image} alt={newsItem.title} />
            </div>
            <div id='newsDate'>
                {newsItem.date}
            </div>
            <div id="newsContent">
                {newsItem.content}
            </div>
        </div>
    </>
  )
}
