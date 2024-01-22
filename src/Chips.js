import React from 'react';
import {Link} from 'react-router-dom';
import './Chips.css';


const CHIPS_IMAGE =
  `https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=25
  74&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f
  GVufDB8fHx8fA%3D%3D`
/**
 * Chips component renders an image of a chip bag and a link to return home.
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * Routes -> Chips
 */

function Chips() {
  return (
    <div className="Chips">
      <img className='Chips-image' src={CHIPS_IMAGE} alt='british chips image'></img>
      <div className="Chips-container">
        <h1 className='Chips-title'>CHIPPPPPPSSSS!!!!!</h1>
        <Link to='/'>Go Back</Link>
      </div>
      <img className='Chips-image' src={CHIPS_IMAGE} alt='british chips image'></img>
    </div>
  )
}

export default Chips;


