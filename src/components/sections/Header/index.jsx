// src/components/Header.js
import React from "react";
import BurgerMenu from "../../elements/BurgerMenu";
import Logo from "../../elements/Logo";
import NavList from "../../elements/NavList";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header>
      {/* <div className={styles.headerAd}>
        <img src="ad/HeaderImage.png" alt="Реклама" />
      </div> */}
      <div className={styles.headerNav}>
        <BurgerMenu></BurgerMenu>
        <Logo img={"icons/Name.svg"}></Logo>
        <NavList></NavList>
        <button>
          <img src="icons/searchIcon.svg" alt="Поиск" />
        </button>
      </div>
    </header>
  );
};

export default Header;
