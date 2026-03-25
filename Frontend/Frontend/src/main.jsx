import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import{Routes, Route} from 'react-router-dom'
import Splash from './componants/Splash/Splash.jsx'
import App from './App.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AuthContextProvider>
  
    
)
