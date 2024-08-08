// src/ArticlesList.js
import React from 'react';
import ArticleCard from './Article';
import './ArticleList.css';

const articles = [
  {
    title: 'Article 1',
    description: 'This is a brief description of article 1.',
    imageUrl: 'https://via.placeholder.com/400x200',
    url: '#'
  },
  {
    title: 'Article 2',
    description: 'This is a brief description of article 2.',
    imageUrl: 'https://via.placeholder.com/400x200',
    url: '#'
  },
  {
    title: 'Article 3',
    description: 'This is a brief description of article 3.',
    imageUrl: 'https://via.placeholder.com/400x200',
    url: '#'
  },
  // Add more articles as needed
];

const ArticlesList = () => {
  return (
    <div className="articles-list">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default ArticlesList;
