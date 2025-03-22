import React from "react";
import styles from "./style.module.css";
import Logo from "../../elements/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <header className={styles.footerTop}>
        <Logo img={"icons/wName.svg"}></Logo>
        <div className={styles.footerNav}>
          <nav className={styles.footerSocial}>
            <a href="#">
              <img src="icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="icons/twiter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="icons/tiktok.svg" alt="TikTok" />
            </a>
          </nav>
        </div>
      </header>
      <div className={styles.footerBottom}>
        <p className={styles.footerSlogan}>
          - ваш гид в мире строительства, объединяющий всех, кто стремится
          создавать надежные и удобные дома, а также поможет читателям расширить
          свой кругозор и узнать что-то новое
        </p>
        <div className={styles.footerMenuWrapper}>
          <div className={styles.footerMenu}>
            <p className={styles.footerMenuName}>Категории</p>
            <nav>
              <NavLink to={"/RealEstatePage"}>Недвижимость</NavLink>
              <NavLink to={"/LuxuryVacationPage"}>Роскошный отдых</NavLink>
              <NavLink to={"/InterviewPage"}>Интервью</NavLink>
              <NavLink to={"/DesignPage"}>Дизайн</NavLink>
              <NavLink to={"/ProductsPage"}>Продукты</NavLink>
            </nav>
          </div>
          <div className={styles.footerMenu}>
            <p className={styles.footerMenuName}>Компания</p>
            <nav>
              <NavLink to={"/AboutUsPage"}>О нас</NavLink>
              <NavLink to={"/ContactPage"}>Контакты</NavLink>
            </nav>
          </div>
        </div>
        <div className={styles.footerContact}>
          <p className={styles.footerAddress}>г. Бишкек, ул. Нуркамала 29</p>
          <p className={styles.footerWorktime}>
            График работы: с 9:00 до 20:00
          </p>
          <a href="" className={styles.footerEmail}>
            JOURNAL.RESIDENT.KG@GMAIL.COM
          </a>
        </div>
      </div>
      <p className={styles.footerLicense}>Все права защищены</p>
    </footer>
  );
};

export default Footer;
