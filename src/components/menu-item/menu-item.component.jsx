import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} 
             onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
                }}
                className="menu-item">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem); 