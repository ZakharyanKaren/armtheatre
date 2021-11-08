import React, { useState } from "react";
import "./mainNavBar.css";
import LangSwitch from "../MainNavBar/switch/LangSwitch";
import Search from "../MainNavBar/search/Search";

const MainNavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick(e) {
    const a = document.querySelectorAll(".main-nav-btn");
    a.forEach((el) => {
      if (el.name !== e.target.name) {
        el.classList.remove("main-nav-active");
      }
    });
    e.target.classList.add("main-nav-active");
  }

  return (
    <div>
      <div className="header-info">
        <span className="header-info__email">info@hayartist.am</span>
        <div className="search-langSwitch">
          <Search />
          <LangSwitch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
      </div>
      <div className="header-section">
        <div className="header-main-nav">
          <div className="main-nav-logo"></div>
          <nav className="main-nav-sections">
            <button
              name="general"
              className="main-nav-btn main-nav-active"
              onClick={handleClick}
            >
              Գլխավոր
            </button>
            <button
              name="service"
              className="main-nav-btn"
              onClick={handleClick}
            >
              Ծառայություններ
            </button>
            <button
              name="aboutUs"
              className="main-nav-btn"
              onClick={handleClick}
            >
              Մեր մասին
            </button>
            <button
              name="contact"
              className="main-nav-btn"
              onClick={handleClick}
            >
              Կապ
            </button>
          </nav>
        </div>
        <div className="header-line">
          <div className="line-1"></div>
          <p>HAYARTIST</p>
          <div className="line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
