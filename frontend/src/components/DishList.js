import React from 'react';
import './DishList.css';

function DishList({ dishes, onTogglePublished }) {
  return (
    <div className="dish-dashboard">
      <h1>Dish Dashboard</h1>
      <ul className="dish-list">
        {dishes.map(dish => (
          <li key={dish.dishId} className="dish-item">
            <h2>{dish.dishName}</h2>
            <img src={dish.imageUrl} alt={dish.dishName} className="dish-image" />
            <p>Published: {dish.isPublished.toString()}</p>
            <button onClick={() => onTogglePublished(dish.dishId)} className="toggle-button">
              Toggle Published
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DishList;
