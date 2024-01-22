import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/soda">Soda</Link>
      <Link to="/cookies">Cookies</Link>
      <Link to="/chips">Chips</Link>
    </div>
  )
}

export default NavBar;