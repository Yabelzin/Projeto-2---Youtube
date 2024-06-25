import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PagesContext } from './components/contexts/pagesContexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <PagesContext.Provider>
      <App />
    </PagesContext.Provider>
  </React.StrictMode>
);