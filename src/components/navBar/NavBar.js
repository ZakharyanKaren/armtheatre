import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar-wrapper">
      <nav className="navBar">
        <button>
          <p>Հանրագիտարան</p>
        </button>
        <button>
          <p>Մշակութային անցուդարձ</p>
        </button>
        <button>
          <p>Տեսանյութեր</p>
        </button>
        <button>
          <p>2021թ․ կյանքից հեռացան</p>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
