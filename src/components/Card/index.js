import React from "react";
import numeral from "numeral";
import heartIcon from "../../assets/icon/heart/heart.svg";
import helpIcon from "../../assets/icon/help/help-material.png";
import starsIcon from "../../assets/icon/stars/stars.png";
import checkIcon from "../../assets/icon/check/check-material.png";
import flashIcon from "../../assets/icon/flash/flash-on-material.png";
import ribbonImage from "../../assets/icon/ribbon/ribbon.svg";

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
    guest,
    price,
    period,
    currency,
    tags,
    saleType,
    extras,
    directBook
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
      <div className="descWrapper">
        <div className="tagContainer">
          {tags.map((item, index) => (
            <span className="tag" key={`tag_${index}`}>
              <img className="check" src={checkIcon} alt="check" />
              {item}
            </span>
          ))}
        </div>
        <div className="row">
          <span className="keyRow">sale type</span>
          <span className="descRow">{saleType}</span>
        </div>
        <div className="row">
          <span className="keyRow">free extras</span>
          <span className="descRow">{extras}</span>
        </div>
      </div>
      <div className="priceWrapper center">
        <div className="priceContainer">
          <span className="key">from</span>
          <span className="price">{`${currency}${numeral(price).format(
            "0,0.00"
          )}`}</span>
          <span className="period">{period}</span>
          <img src={helpIcon} alt="help" />
        </div>
      </div>
      <div className="bookingWrapper center">
        {directBook && (
          <div className="row">
            <img src={flashIcon} alt="flash" />
            <span className="booking">direct booking</span>
          </div>
        )}

        <img src={ribbonImage} alt="View Detail" />
      </div>
    </div>
  );
}

export default Card;
