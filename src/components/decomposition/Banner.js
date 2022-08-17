import React from 'react';
import "./assets/css/Banner.css"


//Компонент для отображения баннера
function Banner({banner}) {
    return (
        <div>
            <img className="banner" src={banner} alt ='banner' />
        </div>
    )
}

export default Banner;