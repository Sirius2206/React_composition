import React from 'react';
import "./assets/css/Banner.css"

function Banner({banner}) {
    return (
        <div className="banner">
            <img src={banner} alt ='banner' />
        </div>
    )
}

export default Banner;