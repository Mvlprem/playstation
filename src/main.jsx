import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>
)
