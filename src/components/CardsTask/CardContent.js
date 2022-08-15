import React from "react";

function CardContent(props) {
  return (
    <>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      <button className="btn btn-primary">{props.btn}</button>
    </>
  );
}

export default CardContent;
