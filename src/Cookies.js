import React from 'react';
import {Link} from 'react-router-dom';


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
      <Link to='/'>Go Back</Link>
    </div>
  )
}


export default Cookies;