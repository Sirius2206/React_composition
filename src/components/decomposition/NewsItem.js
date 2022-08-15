import React from "react";
import "./assets/css/NewsItem.css"

function NewsItem({item}) {
    return (
        <li className="news-item">
            <a className="news-item_link" href="#">
                <img className="news-item_logo" src={item.logo} alt="logo"/>
                <span className="news-item_text">{item.desc}</span>
            </a>
        </li>
    )
}

export default NewsItem
