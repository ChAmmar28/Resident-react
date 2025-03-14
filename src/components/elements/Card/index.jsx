// src/components/Card.js
import React from "react";
import "./style.css";

const Card = ({ image, category, title, date, readingTime, classes }) => {
  return (
    <div className={classes}>
      {image && <img src={image} alt="" className="cardImage" />}
      <div className="cardContent">
        <p className="cardCategory">{category}</p>
        <h3 className="cardTitle">{title}</h3>
        <div className="cardMeta">
          <p>{date}</p>
          <p>●</p>
          <p>{readingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
