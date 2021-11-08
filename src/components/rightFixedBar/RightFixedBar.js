import React from "react";
import "./rightFixedBar.css";
import cake from "../../images/right-fixed-arrow/cake.png";

function RightFixedBar() {
  return (
    <div className="right-fixed-bar">
      <img src={cake} alt="cake" className="cake" />
      <p className="birthday-text">Այս օրը ծնվել են</p>
    </div>
  );
}

export default RightFixedBar;
