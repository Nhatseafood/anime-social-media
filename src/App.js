import React, { Component } from 'react';
import './App.css';
import { Navbar , FormGroup, FormControl} from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CustomNavbar from './modules/components/CustomNavBar';
import Dashboard from './modules/views/Dashboard/Dashboard';
import Events from './modules/views/Events/Events';
import Login from "./modules/views/Login/Login";
import SignUp from "./modules/views/Login/SignUp";

class App extends Component {

  render() {
    return (
      <Router>
      <div>
          <CustomNavbar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <div>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
