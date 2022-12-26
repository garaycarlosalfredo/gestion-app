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

import { CardUser, ListHistory } from "../../components/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useRelayEnvironment } from "react-relay";
import { path, prop } from "ramda";

const buttonsClass = "d-block m-1 w-100";

const mutationRequest = (values, environment, setUserHistory) => {
  GetUserHistory(environment, values)
    .then((response) => {
      const HistoryResponse = prop("getUserHistory", response);
      console.log("HistoryResponse", HistoryResponse);
      setUserHistory(HistoryResponse);
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
  const [userHistory, setUserHistory] = useState(null);

  console.log("userHistory", userHistory);
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
                      mutationRequest(
                        { userId: user._id },
                        environment,
                        setUserHistory
                      );
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
      {userHistory && (
        <Card className="m-1">
          <Card.Title className="m-1">historial</Card.Title>
          {userHistory?.history ? (
            <Card.Body>
              {userHistory?.history.title}
              <ListHistory
                infoList={userHistory?.history.appointment}
              ></ListHistory>
            </Card.Body>
          ) : (
            <p>{userHistory?.message}</p>
          )}
        </Card>
      )}
      <ProfecionalContainer></ProfecionalContainer>
      <PacientContainer></PacientContainer>
    </div>
  );
};

export default UserContainer;
