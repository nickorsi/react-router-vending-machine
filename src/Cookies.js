import React from 'react';
import {Link} from 'react-router-dom';
import './Cookies.css'

const COOKIE_LINK = 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


/**
 * Cookies component renders an image of a chip bag and a link to return home.
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * Routes -> Cookies
 */

function Cookies() {
  return (
    <div>
      <img className ='Cookies-image' src={COOKIE_LINK}></img>
      <Link to='/'>Go Back</Link>
    </div>
  )
}


export default Cookies;