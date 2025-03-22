import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Down from "../DownMenu";
import styles from "./style.module.css";

const NavList = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <div className={styles.navList}>
      <Down
        title={"Недвижимость"}
        isOpen={openMenu === "realEstate"}
        onToggle={() => handleToggle("realEstate")}
        menuElements={[{ title: "НЕДВИЖИМОСТЬ", to: "/RealEstatePage" }]}
      ></Down>
      <Down
        title="Роскошный отдых"
        isOpen={openMenu === "Luxury vacation"}
        onToggle={() => handleToggle("Luxury vacation")}
        menuElements={[
          { title: "ОТЕЛИ", to: "/LuxuryVacationPage#hotels" },
          { title: "РЕСТОРАНЫ", to: "/LuxuryVacationPage#restorants" },
          { title: "СПА-САЛОНЫ", to: "/LuxuryVacationPage#spa" },
        ]}
      ></Down>
      <Down
        title="Дизайн"
        isOpen={openMenu === "Design"}
        onToggle={() => handleToggle("Design")}
        menuElements={[{ title: "ДИЗАЙН", to: "/DesignPage#" }]}
      ></Down>
      <NavLink className={styles.navItem} to={"/ProductsPage"}>
        Продукты
      </NavLink>
      <NavLink className={styles.navItem} to={"/InterviewPage"}>
        Интервью
      </NavLink>
      <NavLink className={styles.navItem} to={"/ContactPage"}>
        Контакты
      </NavLink>
    </div>
  );
};

export default NavList;
