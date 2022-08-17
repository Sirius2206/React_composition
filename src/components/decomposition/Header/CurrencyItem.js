import React from "react";
import "../assets/css/CurrencyItem.css"

//Компонент для отображения элементов списка валют
function CurrencyItem ({item}) {
    return (
        <li className="currency-item">
            <span className="currency-item_text">{item.name} {item.value}</span>
            <span className="currency-item_change">{item.change}</span>
        </li>
    )
}

export default CurrencyItem;
