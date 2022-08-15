import React from "react";
import "./assets/css/Aside.css"

function Aside({asideInfo}) {
    return (
    <div className="aside">
        <img className="aside_img" src={asideInfo.pic} />
        <a className="aside_link" href="#">{asideInfo.desc}</a>
        <span className="aside_const">Смотрите на Яндексе и запоминайте</span>
    </div>
    )

}

export default Aside;