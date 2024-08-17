import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Unique build signature: SP-2024-0816-ReactJS
const signature = "SohamPadia-2024-0816-ReactJS";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Render Application with unique identifier */}
    <App />
  </React.StrictMode>,
);

console.log(`Running application version: ${signature}`);
