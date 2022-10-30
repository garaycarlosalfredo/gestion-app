import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "./components/ui/modals/modal.component";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link f5"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <div>
          <Button variant="primary" onClick={handleClose}>
            SBoton externo
          </Button>
          <Button variant="primary" onClick={handleShow}>
            On
          </Button>
        </div>
        <div>
          <Modal state={show}></Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
