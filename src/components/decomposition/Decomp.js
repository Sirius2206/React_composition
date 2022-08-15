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

import "./assets/css/Decomp.css"

function Decomp() {
  const props = {
    news: [
      {
        logo: ria_logo,
        desc: "Путин упростил получение автомобильных номеров",
      },
      {
        logo: ria_logo,
        desc: "В команде Зеленского раскрыли план реформ на Украине",
      },
      {
        logo: rg_logo,
        desc: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
      },
      {
        logo: aif_logo,
        desc: "Суд закрыл дело Демпартии США против России",
      },
      {
        logo: rg_logo,
        desc: "На Украине призвали создать ракеты для удара по Москве",
      },
    ],
    currency: [
      {
        name: "USD MOEX",
        value: 63.52,
        change: "+0,09",
      },
      {
        name: "EUR MOEX",
        value: 70.86,
        change: "+0,14",
      },
      {
        name: "Нефть",
        value: 64.9,
        change: "+1,63%",
      },
    ],
    asideInfo: {
      pic: aside_pic,
      desc: "Делаем своими руками",
    },
    searchExample: "фаза луны сегодня",
    banner: banner,
  };
  return (
    <div>
      <header className="header-content">
        <News news={props.news} currency={props.currency} />
        <Aside asideInfo={props.asideInfo} />
      </header>
      {/* 
            <Search searchExample={props.searchExample} banner={banner} />
            <Footer /> */}
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
