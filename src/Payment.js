import Navbar from "./components/navbar";
import InputField from "./components/inputField";
import Button from './components/button.js';
import InputFieldNoLabel from "./components/inputFieldNoLabel";
import Creditcardnumber from "./components/creditcardnumber";
import { Visa } from "react-pay-icons";
import Paymenticons from "./components/paymenticons";
const Payment = () =>{
return (
    <div className="container-fluid">
        <div className='row'>
            <Navbar></Navbar>
        </div>

        <div className='row'>
            <h3 style={{marginTop:"2%",textAlign:"center"}}>Payment</h3>
            <span style={{textAlign:"right"}}>Order Number:dummy</span>
        </div>

        <hr></hr>   

        <div className='row containerinpstyle'>
        <div className='col-sm-5 col-md-5 col-lg-5 offset-sm-1 offset-md-1 offset-lg-1'>
              <h4 style={{textAlign:"left"}}>Enter your card details: </h4>
              <Creditcardnumber></Creditcardnumber>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
                <Paymenticons></Paymenticons>
        </div>
        {/* <div className='col-sm-6 col-md-6 col-lg-6'>
              <h4 style={{textAlign:"left"}}>Contact Information: </h4>
              <InputField id="email" text="Email Address" type="email"  placeholder=""></InputField>
              <InputField id="phone" text="Phone Number" type="number"  placeholder=""></InputField>
        </div> */}
      </div>
      <div className='row justify-content-center paymentbuttonstyle'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
              <Button name="Confirm Payment" size="large" handler={()=>{console.log("clicked")}}></Button>
        </div>
      </div>

    </div>
)
}
export default Payment;