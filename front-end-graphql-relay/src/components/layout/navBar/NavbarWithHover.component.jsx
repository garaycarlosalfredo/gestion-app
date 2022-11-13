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
import { useContext, useRef, useState } from "react";

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
        data: [
          {
            title: "Data 1",
            text: "data1 content",
            href: "#data1",
            buttonName: "click data32",
          },
        ],
      },
    },
    {
      href: "#home2",
      title: "Home2",
      dataInfo: {
        title: "Info Home 2",
        data: [
          {
            title: "Data 2",
            text: "data2 content",
            href: "#data2",
            buttonName: "click data32",
          },
          {
            title: "Data 21",
            text: "data21 content",
            href: "#data21",
            buttonName: "click data32",
          },
        ],
      },
    },
    {
      href: "#home3",
      title: "Home3",
      dataInfo: {
        title: "Info Home 3",
        data: [
          {
            title: "Data 3",
            text: "data3 content",
            href: "#data3",
            buttonName: "click data32",
          },
          {
            title: "Data 31",
            href: "#data31",
            buttonName: "click data32",
          },
          {
            title: "Data 32",
            text: "data32 content",
            href: "#data32",
          },
        ],
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

  const menuRef = useRef(null);
  const menu = menuRef.current?.getBoundingClientRect();
  console.log("[menu]", menu);

  return (
    <>
      <Navbar bg={theme || "dark"} variant={varian || "dark"} ref={menuRef}>
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
          <Nav className="justify-content-end z-3">
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
      <div
        class="position-absolute w-100 h-20 border border-black z-2"
        style={{ top: `${menu?.bottom}` }}
      >
        <NavBarHoverItems onMouseLeave={onLeave}>
          <NavBarHoverItem
            component={getDataInfo(MenuItemList)}
          ></NavBarHoverItem>
        </NavBarHoverItems>
      </div>
    </>
  );
}

export default NavbarComponent;
