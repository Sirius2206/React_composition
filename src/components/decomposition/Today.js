import React from "react";

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const weekDays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

function formatDate(date) {
  return `${date.getDate()} ${months[date.getMonth()]}, ${
    weekDays[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`;
}

function Today() {
  return <span className="news-date">{formatDate(new Date())}</span>;
}

export default Today;
