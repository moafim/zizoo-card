import React from "react";
import heartIcon from "../../assets/icon/heart/heart.svg";
import starsIcon from "../../assets/icon/stars/stars.svg";

import "./style.css";

function Card(props) {
  const {
    image,
    recommend,
    title,
    year,
    location,
    hot,
    viewCount,
    reviewCount,
    length,
    cabin,
    guest
  } = props;
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
      <div className="viewWrapper center">
        <div className="viewContainer">
          <div className="viewCount">
            {hot && <span className="viewHot">hot</span>}
            <span>{`${viewCount} view${viewCount > 1 && "s"}`}</span>
          </div>
          <span className="viewDesc">in the last 24 hours</span>
        </div>
      </div>
      <div className="lengthWrapper center">
        <span className="value">{`${length}m`}</span>
        <span className="key">length</span>
      </div>
      <div className="cabinWrapper center">
        <span className="value">{cabin}</span>
        <span className="key">cabins</span>
      </div>
      <div className="guestWrapper center">
        <span className="value">{guest}</span>
        <span className="key">guests</span>
      </div>
      <div className="reviewWrapper center">
        <img src={starsIcon} alt="Stars" />
        <span className="key">{`${reviewCount} reviews`}</span>
      </div>
      <div className="descWrapper">desc</div>
      <div className="priceWrapper">price</div>
      <div className="bookingWrapper">booking</div>
    </div>
  );
}

export default Card;
