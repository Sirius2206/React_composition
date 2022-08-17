import React from "react";
import { nanoid } from "nanoid";
import Play_icon from "./assets/img/Play_icon.png";
import "./assets/css/Footer.css";

function farToCel(temp) {
  return Math.round((temp - 32) / 1.8);
}

//Компонент для отрисовки футера
function Footer({ weather, mostVisited, tvGuide, onAir }) {
  return (
    <footer className="footer">
      <div className="footer_block footer_weather">
        <h3>Погода</h3>
        <div className="weather_content">
          <img
            src={weather.weather[0].icon}
            alt={weather.weather[0].description}
            className="weather_icon"
          />
          <div className="weather_now">{farToCel(weather.main.temp)}°</div>
          <div className="weather_forecast">
            <span>Утром{farToCel(weather.main.temp_min)}</span>
            <span>Днем{farToCel(weather.main.temp_max)}</span>
          </div>
        </div>
      </div>
      <div className="footer_block footer_mostVisited">
        <h3>Посещаемое</h3>
        <ul className="mostVisited_list">
          {mostVisited
            .filter((item, index) => index < 3)
            .map((item) => (
              <li key={nanoid()} classname="mostVisited_item">
                <a className="mostVisited-link" href={item.link}>
                  <span>{item.name}</span>
                  <span> - {item.desc}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="footer_block footer_map">
        <h3>Карта Германии</h3>
        <a href="#">Расписания</a>
      </div>
      <div className="footer_block footer_tvGuide">
        <h3>Телепрограмма</h3>
        <div>
          <p>
            20:30 THT. Best <span>THT International</span>
          </p>
          <p>
            21:30 Джинглики <span>Карусель INT</span>
          </p>
          <p>
            22:15 Наедине со всеми <span>Первый</span>
          </p>
        </div>
      </div>
      <div className="footer_block footer_onAir">
        <h3>Эфир</h3>
        <a href="#" className="onAir_item">
          <img src={Play_icon} className="onAir_img" />
          <p>
            Управление как искусство <span>Успех</span>
          </p>
        </a>
        <a href="#" className="onAir_item">
          <img src={Play_icon} className="onAir_img" />
          <p>
            Ночь. Мир в это время <span>earthTV</span>
          </p>
        </a>
        <a href="#" className="onAir_item">
          <img src={Play_icon} className="onAir_img" />
          <p>
            Андрей Возн... <span>Совершенно секретно</span>
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
