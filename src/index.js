import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Payment from './Payment'
import Orderconfirmation from './Orderconfirmation';
ReactDOM.createRoot(document.getElementById('root')).render(<Orderconfirmation />)
