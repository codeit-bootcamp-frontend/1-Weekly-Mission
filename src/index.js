import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyle from "./styles/GlobalStyles";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Globalstyle />
    <Main />
  </>
);