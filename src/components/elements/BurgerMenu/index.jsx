import React, { useState } from "react";
import styles from "./style.module.css";
import BurgerDownMenu from "../BurgerDownMenu";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бургер-меню
  const [activeMenu, setActiveMenu] = useState(null); // ID активного подменю

  const toggleMenu = () => {
    if (isMenuOpen) {
      setActiveMenu(null); // Закрываем все подменю при закрытии бургера
    }
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div className={styles.burgerContainer}>
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <img src="icons/burgerMenu.svg" alt="Menu" />
      </button>
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}></div>
      )}
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <nav className={styles.burgerNavList}>
          <BurgerDownMenu
            menuId="1"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Недвижимость"}
            menuElements={[{ title: "НЕДВИЖИМОСТЬ", to: "/RealEstatePage" }]}
          />
          <BurgerDownMenu
            menuId="2"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Роскошный отдых"}
            menuElements={[
              { title: "ОТЕЛИ", to: "/LuxuryVacationPage#hotels" },
              { title: "РЕСТОРАНЫ", to: "/LuxuryVacationPage#restorants" },
              { title: "СПА-САЛОНЫ", to: "/LuxuryVacationPage#spa" },
            ]}
          />
          <BurgerDownMenu
            menuId="3"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Дизайн"}
            menuElements={[{ title: "ДИЗАЙН", to: "/DesignPage#" }]}
          />

          <NavLink
            className={styles.navItem}
            onClick={toggleMenu}
            to={"/ProductsPage"}
          >
            Продукты
          </NavLink>
          <NavLink
            className={styles.navItem}
            onClick={toggleMenu}
            to={"/ProductsPage"}
          >
            Интервью
          </NavLink>
          <NavLink
            className={styles.navItem}
            onClick={toggleMenu}
            to={"/ProductsPage"}
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
