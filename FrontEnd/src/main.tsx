
import React, { useState } from "react"
import ReactDOM from 'react-dom'
import App from './App'
import './input.css'
import './index.css'
import { GlobalStyle }  from './styles/global';

import { BrowserRouter  } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

