import React from 'react';
import Landing from './landing/Landing';
import Home from './home/Home';

// function App() {
//   return <Landing />;
// }

function App() {
  return true ? <Home /> : <Landing />;
}

export default App;
