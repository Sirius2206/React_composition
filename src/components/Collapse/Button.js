import React from "react";

function Button(props) {
  return (
    <div className="collapse-container">
      <div className="collapse-head">
        <button className="collapse-btn" onClick={props.toggle}>Переключить</button>
      </div>
      <div className={"collapse-content " + (props.isVisible===true ? "open" : "closed")}>
      {props.children}
      </div>
    </div>
  );
}

export default Button;
