import { useState } from 'react';
import NavBar from './components/navbar';
import Reviews from './components/reviews';
import Subscribe from './components/subscribe';

const App = () => (
  <div>
      <NavBar />
      <Reviews />
      <Reviews />
      <Reviews />
      <Subscribe />
  </div>
);


export default App;
