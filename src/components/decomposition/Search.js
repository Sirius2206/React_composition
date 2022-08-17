import React from "react";
import "./assets/css/Search.css";
import { nanoid } from "nanoid";


//Компонент для отрисовки строки поиска
function Search({ searchExample }) {
  return (
    <div className="search">
      <h2 className="search_logo">
        <span>GOO</span>ндекс
      </h2>
      <div className="search_main">
        <div className="search_links-bar">
          <ul className="links-bar_list">
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Видео
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Картинки
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Новости
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Карты
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Маркет
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Переводчик
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                Эфир
              </a>
            </li>
            <li key={nanoid()}>
              <a className="links-bar_item" href="#">
                еще
              </a>
            </li>
          </ul>
        </div>
        <div className="search_input">
          <div className="input_main">
            <input type="text" className="input_bar" />
            <button className="input_find">Найти</button>
            <div className="input_arrow" />
          </div>
          <div>
            Найдется все. Например, <span  className="input_hint">{searchExample}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
