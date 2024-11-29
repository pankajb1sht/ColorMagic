import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
=======
>>>>>>> origin/main
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
=======
    <App />
  </StrictMode>
);
>>>>>>> origin/main
