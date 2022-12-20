import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { NavContextProvider } from './store/nav-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavContextProvider>
    <App />
  </NavContextProvider>
);
