import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
/**
 * Navbar renders links and works with Routes to allow single page app to render
 * dynamically like a new page based on user interaction.
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * VendingMachine -> NavBar
*/

function NavBar () {
  return (
    <div className="NavBar">
      <Link className="NavBar-link" to="/soda">Soda</Link>
      <Link className="NavBar-link" to="/cookies">Cookies</Link>
      <Link className="NavBar-link" to="/chips">Chips</Link>
    </div>
  )
}

export default NavBar;