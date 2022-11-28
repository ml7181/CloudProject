import Navbar from "./components/navbar";
import Orderconfirmationmessage from "./components/Orderconfirmationmessage";
const Orderconfirmation = () =>{
return (
    <div className="container-fluid">
        <div className="row">
            <Navbar></Navbar>
        </div>

        <div className='row'>
            <h3 style={{marginTop:"2%",textAlign:"center"}}>Order Confirmation</h3>
        </div>
        <hr></hr>

        <div className="row containerinpstyle">
            <div className="col col-sm-5 col-md-5 col-lg-5">
            <Orderconfirmationmessage name="Meghana" orderno=
            '12' email="123@xyz.com"></Orderconfirmationmessage>
            </div>
        </div>
    </div>
)

}
export default Orderconfirmation;