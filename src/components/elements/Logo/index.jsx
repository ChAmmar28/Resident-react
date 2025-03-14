// src/components/Logo.js
import React from "react";
import styles from "./style.module.css";

const Logo = ({ img }) => {
  return (
    <a href="#" className={styles.logo}>
      <img
        src="icons/Logo_resident_text.svg"
        alt="Логотип"
        className={styles.imageViewLogo}
      />
      <img src={img} alt="Логотип" className={styles.textViewLogo} />
    </a>
  );
};

export default Logo;
