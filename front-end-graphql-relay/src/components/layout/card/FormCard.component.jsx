// import React from "react";
// import { path, prop } from "ramda";
// const t = require("../../text/text.json");

// const CardSign = ({ language, modal, onClickHandle, idModal, icon }) => {
//   const txt = path([language, "modal", modal, "card"], t);
//   return (
//     <div className="m-2">
//       <div class="card" style={{ width: "18rem" }}>
//         <i class={icon}></i>
//         <img
//           src=""
//           class="card-img-top"
//           alt="..."
//           style={{ display: "none" }}
//         ></img>
//         <div class="card-body">
//           <h5 class="card-title">{prop("title", txt)}</h5>
//           <p class="card-text">{prop("subtitle", txt)}</p>
//           <a
//             href="#"
//             class="btn btn-primary"
//             style={{ width: "200px" }}
//             data-bs-toggle="modal"
//             data-bs-target={"#" + idModal}
//             onClick={onClickHandle}
//           >
//             {prop("button", txt)}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSign;
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  const { children, cardText, cardClass, cardTitle, srcImage } = props;

  return (
    <Card className={cardClass} style={{ width: "18rem" }}>
      {srcImage ? <Card.Img variant="top" src="holder.js/100px180" /> : null}
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
