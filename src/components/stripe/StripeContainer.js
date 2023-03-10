import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"



const PUBLIC_KEY = "pk_test_51MEqMHDUHyz29Wdiu1RcGu1BIRSBIytdZlVHlLIgVeNfBmQmZ33n7LXgKtVgpNcGtJaV4juvHo80HnEFLKOBHvLM00WbtTopR9"
const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer(){
    return(
       <Elements stripe = {stripeTestPromise} >
        <PaymentForm />

       </Elements>
    )
}