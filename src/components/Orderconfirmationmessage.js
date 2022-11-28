const Orderconfirmationmessage = ({name,orderno,email}) => {
return (
<div className="container-fluid">
    <div className="row">
    <h3>Thank you {name}{'\n'}</h3>
    <p>Your order has been placed and your order number is {orderno}</p>
    <p>You will receive an email about this order with the seller's
        contact information. If you have any questions about this order, please email us at {email}
    </p>    
    </div>
</div>
)
}
export default Orderconfirmationmessage;