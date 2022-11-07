import React from "react";

function NavBarHoverItems({ onMouseLeave, children }) {
  return (
    <div
      onMouseLeave={() => {
        onMouseLeave("");
      }}
    >
      <div className="bg-primary">{children}</div>
    </div>
  );
}

export default NavBarHoverItems;
