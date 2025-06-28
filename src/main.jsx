
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(

  // remive strict mode to avoid double rendering in development
 
    <App />
 
)
