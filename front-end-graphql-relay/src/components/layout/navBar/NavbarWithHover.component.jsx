import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Stack } from "react-bootstrap";
import FormModal from "../modal/FormModal.comonent";
import FormSignIn from "../forms/FormSignIn.component";
import FormSignUp from "../forms/FormSignUp.component";
import NavbarHover from "../NavbarHover.component";
import { compose, find, map, propEq, propOr } from "ramda";
import NavBarHoverItems from "./NavBarHoverItems.component";
import NavBarHoverItem from "./NavBarHoverItem.component";

import AuthContext from "../../../contexts/auth/authContext";
import { useContext, useState } from "react";

function NavbarComponent(args) {
  const { children, varian, theme } = args;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, removeCookieUser } = authContext;
  const [showOption, setShowOption] = useState(null);

  const loginDropDownList = [
    { name: "Item 1", url: "#1" },
    { name: "Item 2", url: "#3" },
  ];
  // console.log("isAuthenticated en nav", isAuthenticated);

  const MenuItemList = [
    {
      href: "#home",
      title: "Home",
      dataInfo: {
        title: "Info Home 1",
        data: [{ title: "Data 1" }],
      },
    },
    {
      href: "#home2",
      title: "Home2",
      dataInfo: {
        title: "Info Home 2",
        data: [{ title: "Data 2" }, { title: "Data 21" }],
      },
    },
    {
      href: "#home3",
      title: "Home3",
      dataInfo: {
        title: "Info Home 3",
        data: [{ title: "Data 3" }, { title: "Data 31" }, { title: "Data 32" }],
      },
    },
  ];

  const onHover = (hover) => {
    //console.log("Hover", hover);
    setShowOption(hover);
  };

  const onLeave = (left) => {
    //console.log("Hover", left);
    setShowOption(left);
  };
  console.log("showOption", showOption);

  const check = (a) => {
    console.log("check ", a);
    return a;
  };

  const getDataInfo = compose(
    propOr([], "dataInfo"),
    check,
    find(propEq("href", showOption))
  );

  return (
    <>
      <Navbar bg={theme || "dark"} variant={varian || "dark"}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {MenuItemList.map((item) => {
              return (
                <Nav.Link
                  href={item.href}
                  onMouseEnter={(e) => onHover(item.href)}
                >
                  {item.title}
                </Nav.Link>
              );
            })}
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
      <NavBarHoverItems onMouseLeave={onLeave}>
        <NavBarHoverItem
          component={getDataInfo(MenuItemList)}
        ></NavBarHoverItem>
      </NavBarHoverItems>
    </>
  );
}

export default NavbarComponent;
