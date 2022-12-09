import React from "react";

function DefaultButton({ children, buttonClass, buttonContainerClass }) {
  return (
    <div className={`${buttonContainerClass}`}>
      <button className={`br3 ${buttonClass}`}>children</button>
    </div>
  );
}

export default DefaultButton;
