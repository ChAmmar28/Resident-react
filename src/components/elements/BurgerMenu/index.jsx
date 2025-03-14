import React, { useState } from "react";
import styles from "./style.module.css";
import BurgerDownMenu from "../BurgerDownMenu";

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
      {/* Кнопка открытия бургер-меню */}
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <img src="icons/burgerMenu.svg" alt="Menu" />
      </button>

      {/* Затемнённый фон (для закрытия кликом) */}
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}></div>
      )}

      {/* Само меню */}
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <nav className={styles.burgerNavList}>
          <BurgerDownMenu
            menuId="1"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Недвижимость"}
            menuElements={["Главная", "О нас", "Контакты"]}
          />
          <BurgerDownMenu
            menuId="2"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Роскошный отдых"}
            menuElements={["Главная", "О нас", "Контакты"]}
          />
          <BurgerDownMenu
            menuId="3"
            activeMenu={activeMenu}
            toggleMenu={toggleSubMenu}
            menuTitle={"Дизайн"}
            menuElements={["Главная", "О нас", "Контакты"]}
          />

          <a className={styles.navItem} onClick={toggleMenu}>
            Продукты
          </a>
          <a className={styles.navItem} onClick={toggleMenu}>
            Интервью
          </a>
          <a className={styles.navItem} onClick={toggleMenu}>
            Контакты
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
