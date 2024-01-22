import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import './VendingMachine.css'


const VENDING_IMGAGE =
  `https://images.unsplash.com/photo-1625650484478-113df4bfc370?q=80&w=1287&aut
  o=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8
  fHx8fA%3D%3D`


/**
 * VendingMachine component nav bar
 * Props:
 * -None
 *
 * State:
 * -None
 * App -> VendingMachine -> {Soda, Cookies, Chips}
 */

function VendingMachine() {
  return (
    <div className='VendingMachine'>
      <h1 className="VendingMacvhine-title">Vending Machine 3000</h1>
      <img className='VendingMachine-img' src={VENDING_IMGAGE}></img>
      <NavBar />
    </div>
  );
}

export default VendingMachine;