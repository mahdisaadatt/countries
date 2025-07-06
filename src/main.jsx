import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { LoadingBarContainer } from 'react-top-loading-bar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingBarContainer>
        <App />
      </LoadingBarContainer>
    </BrowserRouter>
  </StrictMode>
);
