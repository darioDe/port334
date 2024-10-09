import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './index.css';
import LangProvider from './context/LangContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LangProvider>
        <App />
      </LangProvider>
  </StrictMode>,
)
