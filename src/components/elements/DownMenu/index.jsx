import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const Down = ({ title, isOpen, onToggle, menuElements }) => {
  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuBtn} onClick={onToggle}>
        <span>{title}</span>
        <img
          src="icons/btnArrowIcon.svg"
          alt="arrow"
          className={isOpen ? styles.rotated : ""}
        />
      </button>
      {isOpen && (
        <nav className={styles.menuList}>
          {menuElements.map((element) => (
            <NavLink
              to={element["to"]}
              key={element["title"]}
              className={styles.menuListItem}
            >
              {element["title"]}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Down;
