import Navbar from "./components/navbar";
import Orderconfirmationmessage from "./components/Orderconfirmationmessage";
import Ordersummary from "./components/Ordersummary";
import product1 from "./product1.png";
import product2 from "./product2.png";
const Orderconfirmation = () =>{
    //this needs to probably use name and the array passed as props
let my_list = [{
    img:product1,
    name:"table lamp",
    price:20,
    qty:1,
    total:20
},{
    img:product2,
    name:"table",
    price:25,
    qty:2,
    total:50
}]
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
            <Orderconfirmationmessage name="User" orderno=
            '12' email="123@xyz.com"></Orderconfirmationmessage>
            </div>

            <div className="col col-sm-7 col-md-7 col-lg-7">
                <Ordersummary list={my_list}></Ordersummary>
            </div>
        </div>
    </div>
)

}
export default Orderconfirmation;