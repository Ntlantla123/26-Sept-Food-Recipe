import React from 'react';
import ReactDOM from 'react-dom/client'; // This is the new root API (Latest Version of React = 18)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
