import React,  {useState} from 'react'
import { PaymentElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"




const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
        base: {
          color: "#32325d",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "24px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          fontFamily: 'Arial, sans-serif',
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    }


export default function PaymentForm(){
    const [success , setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            payment: elements.getElement(PaymentElement),
            card: elements.getElement(CardElement)
        })
 

    if(!error){
        try{
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment",{
                amount: 3000,
                id
            })
            if(response.data.success){
                console.log("Successful Payment")
                setSuccess(true)
            }

        } catch(error){
            console.log("Error",error)
        }
    }else{
        console.log(error.message)
    }
}


    return(
        <>
        {!success ?

           
        <form onSubmit={handleSubmit}>
            
                <div className="FormRow">
                <div className='row'>
                <h3 style={{marginTop:"2%",textAlign:"left"}}>Payment</h3>
                <span style={{textAlign:"right"}}>Order Number:dummy</span>
                </div>

            <hr></hr>   
            <div className='col-sm-5 col-md-5 col-lg-5 offset-sm-1 offset-md-1 offset-lg-1'>
              <h4 style={{textAlign:"left"}}>Enter your card details: </h4>
              <CardElement options={CARD_OPTIONS}/>
        </div>
            
            <form id="payment-form" onSubmit={handleSubmit}>
      
            </form>
                </div>
           
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>Your order has been placed. Thank you for ordering with us. We will E-mail you the receipt shortly. Stay tight! </h2>
        </div>
}
        </>
    )

}