import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const SliderItem = ({ content }) => {
  return (
    <NavLink to={"/ErrorPage"}>
      <div className={styles.sliderItem}>
        <img src={content} alt={content} />
      </div>
    </NavLink>
  );
};

export default SliderItem;
