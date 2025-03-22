import React, { useState, useEffect } from "react";
import "./Carousel.css";
import SliderItem from "../SliderItem";

const offers = [
  "/imges/11.png",
  "/imges/12.png",
  "/imges/13.png",
  "/imges/14.png",
  "/imges/15.png",
  "/imges/16.png",
  "/imges/17.png",
  "/imges/18.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  return (
    <section className="section">
      <div className="slider">
        <div className="sliderNavItem">
          <div className="sliderTitle">
            <h2>ПРЕДЛОЖЕНИЯ ОТ КОМПАНИИ</h2>
          </div>
          <div className="sliderNavigation">
            <button onClick={goToPrevious} className="carousel-button prev">
              <img src="icons/circlePrevArrow.svg" alt="Previous" />
            </button>
            <button onClick={goToNext} className="carousel-button next">
              <img src="icons/circleNextArrow.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="carousel-content">
          {offers.map((_, index) => (
            <SliderItem
              key={index}
              content={offers[(currentIndex + index) % offers.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
