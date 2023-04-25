import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/assets/pages/app/App';
import { ContextProvider } from './assets/Context/MyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);