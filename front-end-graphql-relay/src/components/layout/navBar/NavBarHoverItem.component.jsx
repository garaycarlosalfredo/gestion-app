import { compose, find, map, prop, propEq, propOr, reject } from "ramda";
import React from "react";

const check = (a) => {
  console.log("check ", a);
  return a;
};

function NavBarHoverItem({ component }) {
  console.log("component NavBarHoverItem", component);
  return (
    <div>
      <div>{component?.title}</div>
      <div className="d-flex justify-content-center ">
        {compose(
          map((a) => {
            return <div className="m-3">{prop("title", a)}</div>;
          }),
          check,
          propOr([], "data")
        )(component)}
      </div>
    </div>
  );
}

export default NavBarHoverItem;
