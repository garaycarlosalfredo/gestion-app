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

import GetUserAppointments from "../../mutations/GetUserAppointments.mutation";

import { CardUser, ListAppointment } from "../../components/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useRelayEnvironment } from "react-relay";
import { path, prop } from "ramda";

const buttonsClass = "d-block m-1 w-100";

const mutationRequest = (values, environment, setUserAppointment) => {
  GetUserAppointments(environment, values)
    .then((response) => {
      console.log("response row", response);
      const AppointmentResponse = prop("getUserAppointments", response);
      console.log("AppointmentResponse", AppointmentResponse);
      setUserAppointment(AppointmentResponse);
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
  const [userAppointment, setUserAppointment] = useState(null);

  console.log("userApointments", userAppointment);
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
                        setUserAppointment
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
      {userAppointment && (
        <Card className="m-1">
          <Card.Title className="m-1">historial</Card.Title>
          {userAppointment?.appointment ? (
            <Card.Body>
              {userAppointment?.appointment.title}
              <ListAppointment
                infoList={userAppointment?.appointment}
              ></ListAppointment>
            </Card.Body>
          ) : (
            <p>{userAppointment?.message}</p>
          )}
          <div>
            <Button
              className={"m-1 ww-25"}
              onClick={() => {
                setUserAppointment(false);
              }}
            >
              cerrar
            </Button>
          </div>
        </Card>
      )}
      <ProfecionalContainer></ProfecionalContainer>
      <PacientContainer></PacientContainer>
    </div>
  );
};

export default UserContainer;
