import React, { useState } from "react";
import "./style.css";
import Logo from "../Logo";
const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // const handleClick = () => {
  //   setIsButtonVisible(false); // Скрываем кнопку
  // };

  return (
    <>
      {/* Кнопка поиска */}
      <button
        className="search-button"
        onClick={() => {
          setIsButtonVisible(false);
          setIsSearchActive(true);
        }}
        style={{ display: isButtonVisible ? "block" : "none" }}
      >
        <img src="icons/searchIcon.svg" alt="Поиск" />
      </button>

      {isSearchActive && (
        <div className="search-overlay">
          <div className="search-header">
            <Logo img={"icons/Name.svg"}></Logo>
          </div>
          <div className="searchWrapper">
            <div className="searchContainer">
              <img src="icons/searchIcon.svg" alt="Поиск" />
              <input
                type="text"
                className="search-input"
                placeholder="Поиск..."
              />
              <button
                className="close-button"
                onClick={() => {
                  setIsSearchActive(false);
                  setIsButtonVisible(true);
                }}
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
