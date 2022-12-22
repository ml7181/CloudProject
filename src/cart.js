import  Navbar  from './components/navbar.js';
import product1 from "./product1.png";
import product2 from "./product2.png";
import { Cart } from 'react-bootstrap-icons';
import Ordersummary_edit from "./components/Ordersummary_edit";
import Button from './components/button.js';
import { useState , useEffect} from 'react';
import Cookies from 'js-cookie';
import { Navigate,useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
// const myList = [{
//     img:product1,
//     name:"table lamp",
//     price:20,
//     qty:1,
//     total:20
//     },{
//     img:product2,
//     name:"table",
//     price:25,
//     qty:2,
//     total:50
// }]
//assumption : In the cart page, we can change only quantity, not add more items
//can add new product to cart via home page


const ShoppingCart = () =>{
    const navigate = useNavigate();
    var apigClient = window.apigClientFactory.newClient();
    const checkout_handle = () => {
        //navigate("/payment");
        //create order
        const orderid = uuidv4();
        const buyer_email = Cookies.get('email');
        var product_ids = [];
        productstate.map(product=>{
            product_ids.push(product['product_id'])
        });
        const location = Cookies.get('location');
        var params = {
            "order_id":orderid,
            "buyer_email":buyer_email,
            "location":location
        }
        var additionalParams = {
            headers:{
                "content-type":"application/json"
            },
            queryParams:{
                "order_id":orderid,
                "buyer_email":buyer_email,
                "location":location
            }
        }
        var body = {
            "product_ids":product_ids
        }
        apigClient.ordersPost(params,body,additionalParams)
        .then((res)=> {
            console.log("success - order created")
            console.log(res)

            //navigate to order confirmation page
            navigate("/orderconfirmation?"+orderid)
        })
        .catch((err) => {
            console.log(err);
            console.log("error");
        })
    }

    const [productstate,setProducState] = useState([]);
    useEffect(() => {
       
       
        const c_email = Cookies.get('email');
        var params = {
            email:c_email,
          };
          var additionalParams = {
            queryParams:{
              email: c_email,
            }
          }
        apigClient.cartsGet(params,{},additionalParams)
        .then(function(result){
          // Add success callback code here.
          console.log("result from api");
          console.log(result);
          var temp = []
          result.data.map(product=>{
            const exchangeRate = 0.013;
            var pp = parseInt(product['price'].replace(/[^0-9]/g, ''));
            if(product['price'].includes("rs") || product['price'].includes("Rs"))
            {
            pp = pp*exchangeRate;
            }
            temp.push({
                img:product.image_File,
                name:product.label,
                price:pp,//product.price,
                qty:1,
                total:pp,//product.price,
                product_id:product.product_id
            })
          });
          setProducState(temp);
        }).catch( function(result){
          console.log("error api")
          // Add error callback code here.
        });
    },[])

    
return(
    <div className="container-fluid">
        <div className="row">
            <Navbar></Navbar>
        </div>

        <div className='row'>
            <h3 style={{marginTop:"2%",textAlign:"left"}}><b>Shopping Cart</b>
            </h3>
        </div>
        <div className="col col-sm-9">
            <Ordersummary_edit list={productstate}></Ordersummary_edit>
        </div>
        <div className='row'>
            <div className='col col-sm-5'>
                    <Button name="Continue Shopping" size="large" handler={()=>{console.log("clicked")}}></Button>
            </div>
            <div className='col offset-lg-2'>
              <Button name="Continue to Checkout" size="large" handler={checkout_handle}></Button>
            </div>
            
        </div>
        
        
    </div>

    
)
}




export default ShoppingCart