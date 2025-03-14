import React from "react";
import styles from "./style.module.css";
import SliderItem from "../../elements/SliderItem";

const Slider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={styles.sliderFirstItem}>
          <div className={styles.sliderTitle}>
            <h2>ПРЕДЛОЖЕНИЯ ОТ КОМПАНИИ</h2>
          </div>
          <div className={styles.sliderNavigation}>
            <button className={styles.sliderButton}>
              <img src="icons/circlePrevArrow.svg" alt="" />
            </button>
            <button className={styles.sliderButton}>
              <img src="icons/circleNextArrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.sliderTrack}>
          <SliderItem></SliderItem>
          <SliderItem></SliderItem>
          <SliderItem></SliderItem>
          <SliderItem></SliderItem>
        </div>
      </div>
    </section>
  );
};

export default Slider;
