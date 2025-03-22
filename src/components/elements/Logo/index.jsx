import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Logo = ({ img }) => {
  return (
    <NavLink to={"/"} className={styles.Logo}>
      <img
        src="icons/Logo_resident_text.svg"
        alt="Логотип"
        className={styles.imageViewLogo}
      />
      <img src={img} alt="Логотип" className={styles.textViewLogo} />
    </NavLink>
  );
};

export default Logo;
