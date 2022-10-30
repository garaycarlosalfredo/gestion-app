import React, { useRef, useState } from "react";

function NavbarHover() {
  const [showOption, setShowOption] = useState(false);
  const menuRef = useRef(null);

  const options = [
    { value: "option-1" },
    { value: "option-2" },
    { value: "option-3" },
  ];

  const onHover = (hover) => {
    console.log("Hover", hover);
    setShowOption(hover);
  };

  const onLeave = (left) => {
    console.log("Hover", left);
    setShowOption(left);
  };

  const menu = menuRef.current.getBoundingClientRect();

  console.log(menu.bottom);

  return (
    <div ref={menuRef}>
      <div className="d-flex links container">
        <div
          href="/"
          className="m-2"
          value="option1"
          onMouseEnter={(e) => onHover(options[0].value)}
        >
          option1
        </div>

        <div
          href="/"
          className="m-2"
          value="option2"
          onMouseEnter={(e) => onHover(options[1].value)}
        >
          option2
        </div>

        <div
          href="/"
          className="m-2"
          value="option3"
          onMouseEnter={(e) => onHover(options[2].value)}
        >
          option3
        </div>
      </div>

      <div
        class="position-absolute w-100 h-20"
        style={{ "z-index": "9999", top: `${menu.bottom}` }}
        onMouseLeave={() => {
          onLeave("");
        }}
      >
        {showOption === "option-1" ? (
          <div className="bg-primary">
            <div>opcion1</div>
            <div>opcion1</div>
            <div>opcion1</div>
            <div>opcion1</div>
            <div>opcion1</div>
          </div>
        ) : null}
        {showOption === "option-2" ? (
          <div className="bg-danger">opcion2</div>
        ) : null}
        {showOption === "option-3" ? (
          <div className="bg-warning w-100 h-75">opcion3</div>
        ) : null}
      </div>
    </div>
  );
}

export default NavbarHover;
