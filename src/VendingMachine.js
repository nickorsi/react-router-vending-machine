import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

/**
 * VendingMachine component renders a vending machine and BrowserRoutes tag
 * to render componenets based on the user interaction with links.
 *
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
      <img className='VendingMachine-img'></img>
      <NavBar />
    </div>
  );
}

export default VendingMachine;