import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
import ShoppingCart from './cart';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import Register from './Register.js';
import Login2 from './Login.js';
import HomePage from './homepage.js';
import CreateListing from './CreateListing.js';
import Payment from './Payment.js';

import StripeContainer from './components/stripe/StripeContainer.js';

import Orderconfirmation from './Orderconfirmation.js';

const App = () => {
  return (
  <Router>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Login2 />} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="/cart" element={<ShoppingCart/>} />
    <Route path="/createlisting" element={<CreateListing/>} />

    <Route path="/payment" element={<StripeContainer/>} />

    <Route path="/payment" element={<Payment/>} />
    <Route path="/orderconfirmation" element={<Orderconfirmation/>} />

  </Routes>
  </Router>
    // <div className="container-fluid">

    //   <div className='row'>
    //     <Navbar></Navbar>
    //   </div>
    //   <div className='row'>
    //     <h3 style={{marginTop:"2%",textAlign:"center"}}>Checkout</h3>
    //   </div>
    //   <hr></hr>
    //   <div className='row containerinpstyle'>
    //     <div className='col-sm-5 col-md-5 col-lg-5 offset-sm-1 offset-md-1 offset-lg-1'>
    //           <h4 style={{textAlign:"left"}}>Shipping address information: </h4>
    //           <InputField id="fname" text="First Name" type="text"  placeholder=""></InputField>
    //           <InputField id="lname" text="Last Name" type="text"  placeholder=""></InputField>
    //           <InputField id="address" text="Address" type="text"  placeholder=""></InputField>
    //           <InputField id="apt" text="Apt/Suite" type="text"  placeholder=""></InputField>
    //           <InputField id="zip" text="Zip Code" type="text"  placeholder=""></InputField>
    //           <InputField id="city" text="City/State" type="text"  placeholder=""></InputField>
    //           <InputField id="country" text="Country" type="text"  placeholder=""></InputField>
    //     </div>
    //     <div className='col-sm-6 col-md-6 col-lg-6'>
    //           <h4 style={{textAlign:"left"}}>Contact Information: </h4>
    //           <InputField id="email" text="Email Address" type="email"  placeholder=""></InputField>
    //           <InputField id="phone" text="Phone Number" type="number"  placeholder=""></InputField>
    //     </div>
    //   </div>
    //   <div className='row justify-content-center'>
    //     <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
    //           <Button name="Proceed to Payment" size="large" handler={()=>{console.log("clicked")}}></Button>
    //     </div>
    //   </div>
    // </div>

  )
}
export default App;
