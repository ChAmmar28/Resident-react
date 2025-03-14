// src/components/Footer.js
import React from "react";
import styles from "./style.module.css";
import Logo from "../../elements/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
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
      </div>
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
              <a href="">Недвижимость</a>

              <a href="">Роскошный отдых</a>

              <a href="">Интервью</a>

              <a href="">Дизайн</a>

              <a href="">Продукты</a>
            </nav>
          </div>
          <div className={styles.footerMenu}>
            <p className={styles.footerMenuName}>Компания</p>
            <nav>
              <a href="">О нас</a>

              <a href="">Контакты</a>
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
