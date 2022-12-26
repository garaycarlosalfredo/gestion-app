import React, {
  Component,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import AuthContext from "../../contexts/auth/authContext";
import ProfecionalContainer from "./ProfecionalContainer.container";
import PacientContainer from "./PacientContainer.container";

import GetUserHistory from "../../mutations/GetUserHistory.mutation";

import { CardUser } from "../../components/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useRelayEnvironment } from "react-relay";

const buttonsClass = "d-block m-1 w-100";

//Seguir
const mutationRequest = (values, environment) => {
  console.log("history required");
  GetUserHistory(environment, values)
    .then((response) => {
      if (response.history != null) {
        console.log("response.history", response.history);
      } else {
        console.log(response);
        console.log("response error", response);
      }
    })
    .catch((err) => {
      console.log("err = ", err);
    });
};

const UserContainer = (props) => {
  const environment = useRelayEnvironment();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  //console.log(user.firstName);
  const [userHistoty, setUserHistory] = useState([]);
  return (
    <div>
      <Card className="m-1">
        <Card.Body>
          <div className="d-flex flex-row">
            <CardUser cardClass={"m-1 d-xs-w-100"} user={user}></CardUser>
            <Card className="m-1 w-100 h-auto">
              <Card.Body className="d-flex justify-content-center">
                <div>
                  <Button
                    className={buttonsClass}
                    onClick={() => {
                      mutationRequest({ userId: user._id }, environment);
                    }}
                  >
                    Ver historial
                  </Button>
                  <Button className={buttonsClass}>Buscar turno</Button>
                  <Button className={buttonsClass}>Buscar Resultado</Button>
                  <Button className={buttonsClass}>Pedir turno</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
      <ProfecionalContainer></ProfecionalContainer>
      <PacientContainer></PacientContainer>
    </div>
  );
};

export default UserContainer;
