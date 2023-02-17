
import React, { useState } from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import './input.css'
import './index.css'
import { GlobalStyle }  from './styles/global';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <GlobalStyle />
    <App />
  </BrowserRouter>,
)

