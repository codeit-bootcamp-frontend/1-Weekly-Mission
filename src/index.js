import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/colors.css';
import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Modal />
  </React.StrictMode>,
);
