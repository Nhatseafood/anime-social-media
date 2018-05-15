import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavBar.css';


class CustomNavbar extends Component {
    render () {
        return (
            <Navbar defaul collapseOnSelect>
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
                
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>


        );
    }
}

export default CustomNavbar;