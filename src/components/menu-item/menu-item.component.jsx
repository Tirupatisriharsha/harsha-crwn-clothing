import React from 'react';
// import {WithRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{
backgroundImage:`url(${imageUrl})`
    }}
    />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>Shop Now</span>
            </div>
        </div>
);

export default MenuItem;