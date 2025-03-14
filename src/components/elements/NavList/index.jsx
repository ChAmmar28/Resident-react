// src/components/NavList.js
import React, { useState } from "react";

// import "./NavList.css"; // Создайте соответ
import Down from "../DownMenu";
import styles from "./style.module.css";

const NavList = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId); // Закрываем текущее, если оно открыто
  };
  return (
    <div className={styles.navList}>
      <Down
        title={"Недвижимость"}
        isOpen={openMenu === "realEstate"}
        onToggle={() => handleToggle("realEstate")}
      ></Down>
      <Down
        title="Роскошный отдых"
        isOpen={openMenu === "Luxury vacation"}
        onToggle={() => handleToggle("Luxury vacation")}
      ></Down>
      <Down
        title="Дизайн"
        isOpen={openMenu === "Design"}
        onToggle={() => handleToggle("Design")}
      ></Down>
      <a className={styles.navItem}>Продукты</a>
      <a className={styles.navItem}>Интервью</a>
      <a className={styles.navItem}>Контакты</a>
    </div>
  );
};

export default NavList;
