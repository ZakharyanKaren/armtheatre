import React from "react";
import "./langSwitch.css";

const LangSwitch = ({ isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider">
        <span className="arm">ՀԱՅ</span>
        <span className="eng">ENG</span>
      </span>
    </label>
  );
};

export default LangSwitch;
