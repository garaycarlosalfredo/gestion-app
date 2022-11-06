import React from "react";

function DropDownItem(args) {
  const { children, handleOnClick, itemName, linkHref } = args;
  return (
    <li>
      <a class="dropdown-item" href={linkHref || "#"} onClick={handleOnClick}>
        {itemName}
      </a>
    </li>
  );
}

export default DropDownItem;
