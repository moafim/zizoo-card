import React from "react";

import "./style.css";

function Card(props) {
  return (
    <div className="wrapper">
      <div className="image">image</div>
      <div className="title">title</div>
      <div className="view">view</div>
      <div className="length">length</div>
      <div className="cabin">cabin</div>
      <div className="guest">guest</div>
      <div className="review">review</div>
      <div className="desc">desc</div>
      <div className="price">price</div>
      <div className="booking">booking</div>
    </div>
  );
}

export default Card;
