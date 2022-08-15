import React from "react";
import Header from "./Header";

const Card = (props) => {
  return (
    <div className="card" style={props.style}>
      {props.header ? <Header header={props.header} /> : null}
      {props.img ? (
        <img src={props.img} className="card-img-top" alt="..." />
      ) : null}
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
