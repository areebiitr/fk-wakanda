import React from 'react';
import './categoryTitle.scss';

const CategoryTitle = (props) => (
    <div className="category-title">
        <p className="title-text">{props.title}</p>
        <p className="subtitle-text">{props.subtitle}</p>
    </div>
);

export default CategoryTitle;