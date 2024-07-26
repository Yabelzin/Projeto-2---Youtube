import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PagesContextStore } from './components/contexts/pagesContexts';
import { CategoryProvider } from './components/contexts/categoriesContext';
import { UserStorage } from './components/contexts/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <PagesContextStore>
      <UserStorage>
        <CategoryProvider>
            <App />
        </CategoryProvider>
      </UserStorage>
    </PagesContextStore>
  </React.StrictMode>
);