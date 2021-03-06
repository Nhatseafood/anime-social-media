import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavBar.css';


class CustomNavbar extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Brand>
                    <a href="#home">ANIME SOCIAL MEDIA</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/events" to="/events">
                    Events
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/login" to="/login">
                    Login
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/signUp" to="/signUp">
                    Register
                    </NavItem>
                
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>


        );
    }
}

export default CustomNavbar;