import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopBar from './TopBar'
import Home from './Home'
import About from './About'

export class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar className="pt-2 pb-2 cov-navbar-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Nav className="navbar-custom">
                        <NavLink className='pt-2 pb-2 pl-3 pr-3 nav-links cov-navbar-links' to='/'>Home</NavLink>
                        <NavLink className='pt-2 pb-2 pl-3 pr-3 nav-links cov-navbar-links' to='/about'>About</NavLink>
                    </Nav>
                    <form className="form-inline cov-form-search" action="" method="post">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </Navbar>
                <TopBar/>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/about' component={About}/>
                    </Switch>
           </BrowserRouter>
        )
    }
}

export default Navigation
