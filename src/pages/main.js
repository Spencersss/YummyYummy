import React, { Component } from 'react';
import MenuPage from './menu';
import ContactUsPage from './contactus';
import ReviewPage from './reviews';
import HomePage from './home';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './notfound';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

class Main extends Component {

    render() {
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <NavbarBrand id="navbar">
                        Yummy Yummy Kitchen
                    </NavbarBrand>
                    <Nav className="mr-auto">
                        <Nav.Link id="navItems" href="/">Home</Nav.Link>
                        <Nav.Link id="navItems" href="/menu">Menu</Nav.Link>
                        <Nav.Link id="navItems" href="/reviews">Reviews</Nav.Link>
                        <Nav.Link id="navItems" href="/contactus">Contact Us</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>       
                    <Route path="/menu">
                        <MenuPage />    
                    </Route>
                    <Route path="/reviews">
                        <ReviewPage />    
                    </Route>  
                    <Route path="/contactus">
                        <ContactUsPage />    
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        )
    }

}

export default Main;