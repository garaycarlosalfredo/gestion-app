import React from "react";
import { path, prop } from "ramda";
const t = require("../../text/text.json");

const CardSign = ({ language, modal, onClickHandle, idModal, icon }) => {
  const txt = path([language, "modal", modal, "card"], t);
  return (
    <div className="m-2">
      <div class="card" style={{ width: "18rem" }}>
        <i class={icon}></i>
        <img
          src=""
          class="card-img-top"
          alt="..."
          style={{ display: "none" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">{prop("title", txt)}</h5>
          <p class="card-text">{prop("subtitle", txt)}</p>
          <a
            href="#"
            class="btn btn-primary"
            style={{ width: "200px" }}
            data-bs-toggle="modal"
            data-bs-target={"#" + idModal}
            onClick={onClickHandle}
          >
            {prop("button", txt)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSign;
