import React, { useState } from "react";
var classNames = require("classnames");

function ThemeButton({ children, theme, onclickAction, ButtonClasses }) {
  var btnClass = classNames(
    `br3 system-sans-serif ba bg-${theme?.bgColor} hover-bg-${theme?.bgColorHover} ${ButtonClasses} `
  );

  return (
    <button className={btnClass} onClick={onclickAction}>
      {children}
    </button>
  );
}

export default ThemeButton;
