import React from "react";

function DropDownComponent(args) {
  const { listClass, children } = args;
  return (
    <li class={`nav-item dropdown ${listClass}`}>
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {"user.firstName"}
      </a>
      <ul class="dropdown-menu">{children}</ul>
    </li>
  );
}

export default DropDownComponent;
