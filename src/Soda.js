import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css'

const COLA_IMAGE =
  `https://images.unsplash.com/photo-1607929712810-f4218da8053f?q=80&w=2187&auto
  =format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8
  fHx8fA%3D%3D`

/**
 * Soda component renders an image of a chip bag and a link to return home.
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * Routes -> Soda
 */

function Soda() {
  return (
    <div className ='Soda'>
      <img className='Soda-image' src={COLA_IMAGE} alt='cola image'></img>
      <div className="Soda-container">
        <h1 className='Soda-title'>OMG SUGARRR!</h1>
        <Link to='/'>Go Back</Link>
      </div>
      <img className='Soda-image' src={COLA_IMAGE} alt='cola image'></img>
    </div>


  )
}


export default Soda;