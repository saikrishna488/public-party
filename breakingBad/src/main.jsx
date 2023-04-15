import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GlobalState} from './context/globalContext';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
      <Router>
          <App />
      </Router>
    </GlobalState>

  </React.StrictMode>,
)
