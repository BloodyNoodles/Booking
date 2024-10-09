import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './login.jsx'
import './login.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
