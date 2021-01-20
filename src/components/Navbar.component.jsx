import React from 'react'
import Nav from './Nav.component'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './Home/Home.component';
import Fruits from './Fruits.component';
import ContactUs from './ContactUs/ContactUs.component';
import Salads from './Salads.component';
import Juices from './Juices.component';

export default function Navbar() {
    return (
        <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/fruits">
                    <Fruits/>
                </Route>
                <Route path="/contact"> 
                    <ContactUs/>
                </Route>
                <Route path="/salads">
                    <Salads/>
                </Route>
                <Route path="/juices">
                    <Juices/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
