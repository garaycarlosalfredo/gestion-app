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

import { CardUser } from "../../components/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const buttonsClass = "d-block m-1 w-100";

const UserContainer = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;
  //console.log(user.firstName);
  const [userHistoty, setUserHistory] = useState([]);
  useMemo(() => {
    console.log("userHistoty", userHistoty);
  }, [userHistoty]);
  return (
    <div>
      <Card className="m-1">
        <Card.Body>
          <div className="d-flex flex-row">
            <CardUser cardClass={"m-1 d-xs-w-100"} user={user}></CardUser>
            <Card className="m-1 w-100 h-auto">
              <Card.Body className="d-flex justify-content-center">
                <div>
                  <Button className={buttonsClass}>Ver historial</Button>
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
