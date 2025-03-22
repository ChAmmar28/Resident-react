import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const SectionsHeader = ({ headline, herf }) => {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{headline}</h2>
      <NavLink to={herf} className={styles.sectionLink}>
        <img src="icons/goToArrowIcon.svg" alt="" />
      </NavLink>
    </header>
  );
};

export default SectionsHeader;
