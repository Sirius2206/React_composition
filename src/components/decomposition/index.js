import React from "react";
import aif_logo from "./assets/img/aif_logo.png";
import aside_pic from "./assets/img/aside_pic.jpg";
import banner from "./assets/img/banner.jpg";
import Play_icon from "./assets/img/Play_icon.png";
import rg_logo from "./assets/img/rg_logo.jpg";
import ria_logo from "./assets/img/ria_logo.webp";
import weather_icon from "./assets/img/weather_icon.png";
import Header from "./Header";
import News from "./News";
import Aside from "./Aside";
import Search from './Search';
import Banner from "./Banner";
import Footer from "./Footer";

import "./assets/css/Decomp.css"

function Decomp() {
  const serverResponse = {
    "news": [
      {
        "logo": ria_logo,
        "desc": "Путин упростил получение автомобильных номеров",
        "link": "#"
      },
      {
        "logo": ria_logo,
        "desc": "В команде Зеленского раскрыли план реформ на Украине",
        "link": "#"
      },
      {
        "logo": rg_logo,
        "desc": '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        "link": "#"
      },
      {
        "logo": aif_logo,
        "desc": "Суд закрыл дело Демпартии США против России",
        "link": "#"
      },
      {
        "logo": rg_logo,
        "desc": "На Украине призвали создать ракеты для удара по Москве",
        "link": "#"
      },
    ],
    "currency": [
      {
        "name": "USD MOEX",
        "value": 63.52,
        "change": "+0,09",
      },
      {
        "name": "EUR MOEX",
        "value": 70.86,
        "change": "+0,14",
      },
      {
        "name": "Нефть",
        "value": 64.9,
        "change": "+1,63%",
      },
    ],
    "asideInfo": {
      "pic": aside_pic,
      "desc": "Делаем своими руками",
      "link": "#"
    },
    "searchExample": "фаза луны сегодня",
    "banner": {
      "banner": banner,
      "desc": "Весеннее настроение",
      "link": "#"
    },
    "weather": {
      "coord": {
        "lon": -122.08,
        "lat": 37.39
      },
      "weather": [
        {
          "id": 800,
          "main": "Cloudy",
          "description": "small_clouds",
          "icon": weather_icon
        }
      ],
      "base": "stations",
      "main": {
        "temp": 65,
        "feels_like": 67,
        "temp_min": 58,
        "temp_max": 70,
        "pressure": 1023,
        "humidity": 98
      },
      "visibility": 10000,
      "wind": {
        "speed": 1.5,
        "deg": 350
      },
      "clouds": {
        "all": 1
      },
      "dt": 1560350645,
      "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "DE",
        "sunrise": 1560343627,
        "sunset": 1560396563
      },
      "timezone": -25200,
      "id": 420006353,
      "name": "Mountain View",
      "cod": 200
    },
    "mostVisited": [{
      "name": "Недвижимость",
      "desc": "о сталинках",
      "link": "#"
    },
    {
      "name": "Маркет",
      "desc": "люстры и светильники",
      "link": "#"
    },
    {
      "name": "Авто.ру",
      "desc": "привод 4х4 до 500 000",
      "link": "#"
    },
    {
      "name": "Игры",
      "desc": "В разработку запущена новая игра по «Властелину колец»",
      "link": "#"
    },
    {
      "name": "Кулинария",
      "desc": "50 блюд из картофеля",
      "link": "#"
    }],

  };
  return (
    <div className="Decomp-container">
      <header className="header-content">
        <News news={serverResponse.news} currency={serverResponse.currency} />
        <Aside asideInfo={serverResponse.asideInfo} />
      </header>
      <Search searchExample={serverResponse.searchExample}  />
      <Banner banner={banner} />
      <Footer {...serverResponse}/>
    </div>
  );
}

export default Decomp;
/*
верхняя часть
    Сейчас в СМИ +дата
        Список новостей
    Доп.реклама

Центр
    Лого
    Поиск и быстрый доступ
    баннер

Нижняя часть
    Список всякого
*/
