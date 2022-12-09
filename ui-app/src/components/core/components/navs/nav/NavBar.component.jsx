import React from "react";

function NavBar({ children, navBarClass }) {
  return (
    <div className={`${navBarClass}`}>
      <div>{children}</div>
    </div>
  );
}

export default NavBar;
