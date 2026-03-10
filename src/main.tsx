import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UIKit from './UIKit.tsx'

const AppRouter = () => {
  const path = window.location.pathname;
  if (path === '/uikit') {
    return <UIKit />;
  }
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
