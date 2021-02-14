import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';

import {Switch,Route,Redirect} from 'react-router-dom';

const Time=()=>
{
    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Redirect to='/' />
        </Switch>
        </>
    );
};
export default Time;