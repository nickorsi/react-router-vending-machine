import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Cookies from './Cookies';
import Chips from './Chips';

/**
 * Routes components renders a child component based on the route given on the
 * single page site.
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * VendingMachine -> RoutesList -> {Soda, Cookies, Chips}
*/

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path='/soda' element={<Soda />} />
      <Route path = '/cookies' element={<Cookies />} />
    </Routes>
  );
}

export default RoutesList;