import React from "react";
import "../../../index.css";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const BurgerDownMenu = ({
  menuId,
  activeMenu,
  toggleMenu,
  menuTitle,
  menuElements,
}) => {
  const isOpen = activeMenu === menuId;

  return (
    <div className={styles.burgerMenuContainer}>
      <button
        className={styles.burgerMenuBtn}
        onClick={() => toggleMenu(menuId)}
      >
        {menuTitle}
        <img
          src="/icons/btnArrowIcon.svg"
          alt="▼"
          className={isOpen ? styles.rotated : ""}
        />
      </button>

      {isOpen && (
        <nav className={styles.burgerMenuList}>
          {menuElements.map((element) => (
            <NavLink
              to={element["to"]}
              key={element["title"]}
              className={styles.downListItem}
            >
              {element["title"]}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default BurgerDownMenu;
