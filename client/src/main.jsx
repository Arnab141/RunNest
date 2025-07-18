// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './Context/AppContext';
import './index.css'; // Tailwind or base styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
