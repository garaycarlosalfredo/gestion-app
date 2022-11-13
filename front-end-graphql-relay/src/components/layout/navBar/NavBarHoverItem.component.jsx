import { compose, find, map, prop, propEq, propOr, reject } from "ramda";
import React from "react";
import { Button, Card } from "react-bootstrap";
const check = (a) => {
  console.log("check ", a);
  return a;
};

const variant = "primary";

function NavBarHoverItem({ component }) {
  console.log("component NavBarHoverItem", component);
  return (
    <div>
      <div className="d-flex justify-content-center ">
        {compose(
          map((item) => {
            return (
              <div className="m-2 h-auto">
                <Card
                  border={variant}
                  style={{ width: "18rem" }}
                  className={"h-100"}
                >
                  <Card.Header>{component?.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{prop("title", item)}</Card.Title>
                    <Card.Text>{prop("text", item)}</Card.Text>

                    {item?.href && (
                      <Card.Link href={prop("href", item)}>
                        {prop("buttonName", item)}
                      </Card.Link>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          }),
          check,
          propOr([], "data")
        )(component)}
      </div>
    </div>
  );
}

export default NavBarHoverItem;
