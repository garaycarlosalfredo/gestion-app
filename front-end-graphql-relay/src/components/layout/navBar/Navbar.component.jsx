import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Stack } from "react-bootstrap";
import FormModal from "../modal/FormModal.comonent";
import FormSignIn from "../forms/FormSignIn.component";
import FormSignUp from "../forms/FormSignUp.component";

import AuthContext from "../../../contexts/auth/authContext";
import { useContext } from "react";

function NavbarComponent(args) {
  const { children, varian, theme } = args;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, removeCookieUser } = authContext;

  const loginDropDownList = [
    { name: "Item 1", url: "#1" },
    { name: "Item 2", url: "#3" },
  ];
  console.log("isAuthenticated en nav", isAuthenticated);

  return (
    <>
      <Navbar bg={theme || "dark"} variant={varian || "dark"}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <NavDropdown title="Ingresar" id="navbarScrollingDropdown">
              {!isAuthenticated && (
                <FormModal
                  isDropDownItem={true}
                  modalTitle={"Titulo del modal"}
                  optionalCloseCondition={isAuthenticated}
                  buttonTitle={"Mi cuenta"}
                >
                  <FormSignIn></FormSignIn>
                </FormModal>
              )}
              {!isAuthenticated && (
                <FormModal
                  isDropDownItem={true}
                  modalTitle={"Titulo del modal"}
                  optionalCloseCondition={isAuthenticated}
                  buttonTitle={"Registrarse"}
                >
                  <FormSignUp></FormSignUp>
                </FormModal>
              )}
              {isAuthenticated && (
                <NavDropdown.Item href="#action4" onClick={removeCookieUser}>
                  Salir
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Cancelar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
