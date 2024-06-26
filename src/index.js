import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PagesContext, PagesContextStore } from './components/contexts/pagesContexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <PagesContextStore>
      <App />
  </PagesContextStore>
  </React.StrictMode>
);