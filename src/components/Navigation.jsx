import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About'

export class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark" className="justify-content-center pt-5 pb-5">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Nav className="navbar-custom">
                        <NavLink className='text-light pt-3 pb-3 pl-5 pr-5 nav-links' to='/'>Home</NavLink>
                        <NavLink className='text-light pt-3 pb-3 pl-5 pr-5 nav-links' to='/about'>About</NavLink>
                    </Nav>
                </Navbar>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/about' component={About}/>
                    </Switch>
           </BrowserRouter>
        )
    }
}

export default Navigation
