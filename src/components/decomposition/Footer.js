import React from "react";
import "./assets/css/Footer.css";
import { nanoid } from "nanoid";

function farToCel(temp) {
  return Math.round((temp - 32) / 1.8);
}

function Footer({ weather, mostVisited, tvGuide, inAir }) {
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
        <ul classname="mostVisited_list">
          {mostVisited
            .filter((item, index) => index < 3)
            .map((item) => (
              <li key={nanoid()}>
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
      </div>
      <div className="footer_block footer_inAir"></div>
    </footer>
  );
}

export default Footer;
