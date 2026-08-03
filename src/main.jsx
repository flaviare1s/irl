import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Nunito auto-hospedada: evita o CSS render-blocking do Google Fonts e as
// conexões extras a fonts.googleapis.com/fonts.gstatic.com. Só os pesos
// normais — o projeto não usa itálico.
import '@fontsource-variable/nunito/wght.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
