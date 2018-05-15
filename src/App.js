import React, { Component } from 'react';
import './App.css';
import { Navbar , FormGroup, FormControl} from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CustomNavbar from './modules/components/CustomNavBar';
import Dashboard from './modules/views/Dashboard';
import Events from './modules/views/Events';
import Login from "./modules/views/Login";





class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <CustomNavbar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />


        
      </div>
      </Router>
    );
  }
}

export default App;
