import React from "react";
import heartIcon from "../../assets/icon/heart/heart.svg";

import "./style.css";

function Card(props) {
  const { image, recommend, title, year, location, hot, count } = props;
  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <img className="img" src={image} alt="Boat Image" />
        {recommend && <div className="recommend">Zizoo recommended</div>}
      </div>
      <div className="titleWrapper">
        <div className="titleContainer">
          <div className="titleYear">
            <span className="title">{title}</span>
            <span className="year">{year}</span>
          </div>
          <span className="location">{location}</span>
        </div>
        <div className="favorite">
          <img src={heartIcon} alt="Favorite" />
        </div>
      </div>
      <div className="viewWrapper">
        <div className="viewContainer">
          <div className="viewCount">
            {hot && <span className="viewHot">hot</span>}
            <span>{`${count} view${count > 1 && "s"}`}</span>
          </div>
          <span className="viewDesc">in the last 24 hours</span>
        </div>
      </div>
      <div className="lengthWrapper">length</div>
      <div className="cabinWrapper">cabin</div>
      <div className="guestWrapper">guest</div>
      <div className="reviewWrapper">review</div>
      <div className="descWrapper">desc</div>
      <div className="priceWrapper">price</div>
      <div className="bookingWrapper">booking</div>
    </div>
  );
}

export default Card;
