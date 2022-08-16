/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { nanoid } from "nanoid";

import Today from "./Today";
import NewsItem from "./NewsItem";
import CurrencyItem from "./CurrencyItem";

import "./assets/css/News.css";

function News({ news, currency }) {
  return (
    <div className="news">
      <div>
        <a href="#" className="news-header">
          Сейчас в СМИ
        </a>
        <a href="#" className="news-header">
          В ГЕРМАНИИ!!!!!!!!
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
