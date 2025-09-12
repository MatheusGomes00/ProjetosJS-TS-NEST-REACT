import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from '../src/routes/AppRoutes.jsx'
import "./style.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
