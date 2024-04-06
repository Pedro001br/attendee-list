import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'

// Componentes e Propriedades
//Componentes são funções que retornam HTML


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
