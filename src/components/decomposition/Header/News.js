
import React from "react";
import { nanoid } from "nanoid";

import Today from "./Today";
import NewsItem from "./NewsItem";
import CurrencyItem from "./CurrencyItem";

import "../assets/css/News.css";


//Принимает данные о новостях и валюте и отображает в хедере
function News({ news, currency }) {
  return (
    <div className="news">
      <div>
        <a href="#" className="news-header">
          Сейчас в СМИ   
        </a>
        <a href="#" className="news-header">
          в Германии
        </a>
        <a href="#" className="news-header">
          Рекомендуем
        </a>
        <Today />
      </div>
      <ul className="news-list">
        {news.map((item) => (
          <NewsItem key={nanoid()} item={item} />
        ))}
      </ul>
      <ul className="news-currency">
        {currency.map((item) => (
          <CurrencyItem key={nanoid()} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default News;
