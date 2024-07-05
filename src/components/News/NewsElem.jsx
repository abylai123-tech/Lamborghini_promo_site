import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NewsElem = ({item}) => {
  const news = useSelector(state => state.newsSlice.news);
  return (
    <div className="newsElem" >
          <div className="newsImage"><img src={item.image} width={700}/></div>
          <div className='newsTitle'>{item.title}</div>
          <Link to={`/news/${item.id}`}>
            <div className="newsBtn">ЧИТАТЬ БОЛЬШЕ</div>
          </Link>
    </div>
  )
}