import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes';
import Global from './theme/globalTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Global/>
    <Routes/>
  </React.StrictMode>,
)
