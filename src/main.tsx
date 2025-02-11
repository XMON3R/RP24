import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import './output.css';

//root render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
