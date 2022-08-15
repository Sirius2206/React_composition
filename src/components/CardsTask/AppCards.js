import CardContent from "./CardContent";
import React from "react";
import logo192 from "./logo192.png";

import Card from "./Card";

function AppCards() {
  const props1 = {
    style: {
      width: 18 + "rem",
    },
    img: logo192,
  };

  const props2 = {
    header: "Featured",
  };

  const contentProps = {
    title: "Card title",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "Go somewhere",
  };

  return (
    <>
      <Card {...props1}>
        <CardContent {...contentProps} />
      </Card>

      <Card {...props2}>
        <CardContent {...contentProps} />
      </Card>
    </>
  );
}

export default AppCards;
