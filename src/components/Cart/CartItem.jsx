import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/slices/cartSlice';

import '../styles/CartItem.css';

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div  className="shop-item cart-item">
      <img src={item.images[0]} alt={item.title} className="shop-item-image cart-item-image" />
      <div className="shop-item-details cart-item-details">
        <div>
          <h2 className="shop-item-title cart-item-title">{item.title}</h2>
          <p>Количество: {item.quantity}</p>
        </div>
        <p className="shop-item-price cart-item-price">{item.price} $</p>
        <button className='deleteFromCartBtn' onClick={() => {dispatch(deleteItem(item.id))}}>Удалить</button>
      </div>
    </div>
  );
};
