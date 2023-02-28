
import React, { useState } from "react"
import ReactDOM from 'react-dom'
import App from './App'
import './input.css'
import './index.css'
import { GlobalStyle }  from './styles/global';
import { HashRouter } from "react-router-dom";

import { BrowserRouter  } from 'react-router-dom';



ReactDOM.render(
  <HashRouter>
    <GlobalStyle/>
    <App />
  </HashRouter>,
  document.getElementById("root")
)

