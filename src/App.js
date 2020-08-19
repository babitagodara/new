import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import Downloads from './Downloads';

import Navbar from './Navbar';

import { Switch, Route, Redirect } from 'react-router-dom';
//import Common from './Common'

//import logo from './logo.svg';
//import './App.css';

const App = () => {
  return(
    <>
 
    <Navbar/>
   
   <Switch>
     <Route  exact path="/" component={Home} />
     <Route  exact path="/about" component={About} />
     <Route  exact path="/Services" component={Services} />
     <Route  exact path="/clients" component={Clients} />
     <Route  exact path="/downloads" component={Downloads} />
     <Route  exact  path="/contact" component={Contact} />
   <Redirect to='/' />
   </Switch>
    </>



  );



};

/*
const App = () =>{
  return(
    <>
    <Common/>
    </>



);



};
*/
export default App;

