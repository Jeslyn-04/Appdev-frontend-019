// src/ArticleCard.js
import React from 'react';
import './Article.css';

const ArticleCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}

export default ArticleCard;
