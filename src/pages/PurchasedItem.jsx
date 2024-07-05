import React from 'react';
import '../pages/styles/Purchaseditem.css'

const PurchasedItem = ({ item, quantity }) => {
    return (
        <div className="purchased-item-card">
            <img src={item.images[0]} alt={item.title} className="purchased-item-image" />
            <div className="purchased-item-details">
                <h2>{item.title}</h2>
                <p className="purchased-item-price">{item.price} $</p>
                <p className="purchased-item-quantity">Количество: {quantity}</p>
                <p className="purchased-item-category">{item.category}</p>
            </div>
        </div>
    );
};

export default PurchasedItem;
