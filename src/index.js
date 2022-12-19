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
import CreateListing from './CreateListing';
import ShoppingCart from './cart';
import HomePage from './homepage';
import ImportScript from './scriptimport';
import Login2 from './Login';
import Register from './Register';
// import apigClient from './apiGateway-js-sdk/ApigClient';
// import apiGatewayClient from './apiGateway-js-sdk/lib/apiGatewayCore/apiGatewayClient'
// import sigV4ClientConfig from './apiGateway-js-sdk/lib/apiGatewayCore/sigV4ClientConfig'
// import simpleHttpClientConfig from './apiGateway-js-sdk/lib/apiGatewayCore/simpleHttpClientConfig'
// import utils from './apiGateway-js-sdk/lib/apiGatewayCore/utils'
// // import enc-base64 from './apiGateway-js-sdk/lib/CryptoJS/component/enc-base64'
// // import hmac from './apiGateway-js-sdk/lib/CryptoJS/component/hmac'
// // import hmac-sha256 from './apiGateway-js-sdk/lib/CryptoJS/rollups/hmac-sha256'
// // import sha256 from './lib/CryptoJS/rollups/sha256'
// import axios from './apiGateway-js-sdk/lib/axios/dist/axios.standalone'
// // import url-template from './lib/url-template/url-template'

let list = [{
    header:"header",
    body1:"body",
    body2:"body"
},
{
    header:"second",
    body1:"body1",
    body2:"body3"
}]

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*')
//     xmlHttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     xmlHttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept')
//     xmlHttp.send(null);
// }
// httpGetAsync("https://mn7lm37p5h.execute-api.us-east-1.amazonaws.com/dev/get-products?location=Colombo 13, Colombo",(data)=>{
// console.log(data);
// ReactDOM.createRoot(document.getElementById('root')).render(<HomePage initialList={list} />)
// })
//let apigClient = apigClientFactory.newClient();


//let apigClient = apigClientFactory.newClient();
ReactDOM.createRoot(document.getElementById('root')).render(<HomePage/>)

