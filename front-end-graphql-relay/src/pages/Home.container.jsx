import React from "react";
import { BrowserRouter as Router, Route ,Routes ,Navigate} from 'react-router-dom';
import PropTypes from "prop-types";
import Navbar from "../components/layout/Navbar.component";
import WestContainer from "./containers/West.container";

const HomeContainer = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/home" element={<WestContainer />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
};

HomeContainer.propTypes = {};

export default HomeContainer;
