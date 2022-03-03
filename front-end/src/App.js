import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route ,Routes ,Navigate} from 'react-router-dom';

//Redux 
import {Provider} from 'react-redux'
import store from './redux/store/store'

//My Components
import ResponsiveAppBar from './components/layout/ResponsiveAppBar';
import Main from './components/views/Main'
import Default from './components/views/Default'
import RouteProtected from './components/routeProtected/RouteProtected';
import ProtectedRoute from './components/routeProtected/ProtectedRoute'
import {checkUserAuth} from './util/auth'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store = {store}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route exact path="/main" element={
              <ProtectedRoute>
                <Main></Main>
              </ProtectedRoute>
            }/>
            <Route path="/home" element={<Default/>}/> 
            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>
        </Provider>
      </Router>
    );
  }
}

export default App;
