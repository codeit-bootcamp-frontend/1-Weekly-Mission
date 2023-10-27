import React from 'react';
import LandingPage from '../pages/landing/LandingPage';
import HomePage from '../pages/home/HomePage';

function App() {
  return true ? <HomePage /> : <LandingPage />;
}

export default App;
