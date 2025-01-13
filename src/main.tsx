import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('wp_article_list')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
