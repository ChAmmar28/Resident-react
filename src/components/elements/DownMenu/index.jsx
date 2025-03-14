import React from "react";
import "./style.css";

const Down = ({ title, isOpen, onToggle }) => {
  return (
    <div className="menuContainer">
      <button className="menuBtn" onClick={onToggle}>
        {title}
        <img
          src="icons/btnArrowIcon.svg"
          alt="arrow"
          className={isOpen ? "arrow rotated" : "arrow"}
        />
      </button>
      {isOpen && (
        <nav className="menuList">
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      )}
    </div>
  );
};

export default Down;
