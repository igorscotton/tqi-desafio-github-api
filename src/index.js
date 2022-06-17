import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers  from './Providers'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Providers>
     <React.StrictMode>
        <App />
     </React.StrictMode>
  </Providers> 
);

reportWebVitals();
