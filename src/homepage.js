import Navbar from "./components/navbar";
import Searchbar from "./components/Searchbar";
import { useState } from 'react';
import Button from "./components/button";
import product1 from "./product1.png";
// import ImportScript from './scriptimport';


const HomePage = () => {
    //product list is assumed to be an array of objects
    //initialList is the list of products we want to display before anyhting else is searched
    let productList = [{
        header:"header",
        body1:"body",
        body2:"body"
    },
    {
        header:"second",
        body1:"body1",
        body2:"body3"
    }]
    const [productstate,setProducState] = useState([]);
    var apigClient = window.apigClientFactory.newClient();
    console.log(apigClient);
    var params = {
        path: "/products",
        location: "Athurugiriya,  Colombo"
      };
      var body = {
        test:"test"
      };
    //   var additionalParams = {
    //     // If there are any unmodeled query parameters or headers that must be
    //     //   sent with the request, add them here.
    //     headers: {
    //       param0: '',
    //       param1: ''
    //     },
    //     queryParams: {
    //       param0: '',
    //       param1: ''
    //     }
    //   };
      //productList=initialList
      //const [productList,setProductList] = useState(initialList)
      apigClient.productsGet(params,{},{})
      .then(function(result){
        // Add success callback code here.
        console.log(result);
        setProducState(result);
      }).catch( function(result){
        console.log("error api")
        // Add error callback code here.
      });
   
    //to do: on search event, update state variable with the new list
    return (    
    <>
    <Navbar></Navbar>
    <div className="container-fluid maincontainerstyle">
    <div className="row">
        <div className="col offset-sm-2 offset-md-2 offset-lg-2 col-sm-7 col-md-7 col-lg-7">
        <Searchbar placeholder="Search"></Searchbar>
        </div>
    </div>
    <div className="row maincontainerstyle">
        <div className="col offset-sm-2 offset-md-2 offset-lg-2 col-sm-7 col-md-7 col-lg-7">
            {/* <ul className="list-group"> */}
            <div className="card-deck">
                {
                    productstate.map(product => {
                       
                        return (
                            // <li style={{display:"inline"}} className="list-group-item">
                            //     <div class="card">
                            //         <h5 class="card-header">{product.header}</h5>
                            //             <div class="card-body">
                            //             <h5 class="card-title">{product.body1}</h5>
                            //             <p class="card-text">{product.body2}</p>
                            //             <a href="#" class="btn btn-primary">Go somewhere</a>
                            //         </div>

                            //     </div>
                            // </li>
                            
                            <div className="card">
                                <h5 class="card-header">{}</h5>
                                    <div className="card-body">
                                         {/* <h5 class="card-title">{product.body1}</h5>
                                         <p class="card-text">{product.body2}</p>
                                         <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                         <div className="container-fluid">
                                            <div className="row">
                                                <div className="col col-sm-7 col-md-7 col-lg-7">
                                                    {/* <img src={product1}></img> */}
                                                    Image here
                                                </div>

                                                <div className="col col-sm-5 col-md-5 col-lg-5">
                                                    <ul>
                                                        <li>
                                                            {product.label}
                                                        </li>
                                                        <li>
                                                            <Button name="add to cart" handler={()=>{console.log("clicked")}}></Button>
                                                        </li>
                                                        <li>
                                                            {product.price}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>   
                        )
                    }
                    )
                }
              </div>
            {/* </ul> */}
        </div> 
    </div>
    </div>
    </>
    )
}
export default HomePage;