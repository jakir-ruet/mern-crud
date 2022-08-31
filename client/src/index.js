import React from 'react';
import ReactDOM from 'react-dom/client';
import './misc/index.css';
import App from './apps/App';
import reportWebVitals from './misc/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
