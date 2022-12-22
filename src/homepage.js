import Navbar from "./components/navbar";
import Searchbar from "./components/Searchbar";
import { useState , useEffect} from 'react';
import Button from "./components/button";
import product1 from "./product1.png";
// import ImportScript from './scriptimport';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    //product list is assumed to be an array of objects
    //initialList is the list of products we want to display before anyhting else is searched
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
    const email = searchParams.get('email');
    const location_c = searchParams.get('location');
    const userid_c = searchParams.get('userid');
    console.log(username);
    console.log(email);
    console.log(location_c);
    console.log(userid_c);
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
    let initialproducts
    const [productstate,setProducState] = useState([]);
    const [searchentry,setsearchentry] = useState("");
    const [curproduct,setcurproduct] = useState({});
    var apigClient = window.apigClientFactory.newClient();
    console.log(apigClient);
    console.log("props:"+username+" "+email+" "+location_c);
    var params = {
        path: "/products",
        location: location_c,
        userid:userid_c//"Brooklyn"
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

    //   apigClient.productsGet(params,{},{})
    //   .then(function(result){
    //     // Add success callback code here.
    //     console.log(result);
    //     setProducState(result);
    //   }).catch( function(result){
    //     console.log("error api")
    //     // Add error callback code here.
    //   });
    const addtocart = (pro) =>
    {
      console.log(pro);
      var params = {
        username:email,//"ml7181@nyu.edu",
        headers:{
            "Content-Type":"application/json"
        }
    };
    var additionalParams = {
        queryParams:{
          username:email,//"ml7181@nyu.edu"
        },
        headers:{
            "Content-Type":"application/json"
        }
    };
    var body = pro;
      apigClient.cartsPost(params,body,additionalParams)
      .then((res)=>{
        console.log("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      })
    }
    const searchentry_change = (event) =>
    {
        setsearchentry(event.target.value);
    }
    const search = () => {
        var params = {
            //path: "/carts",
            // email: email_password["email"],
            // password:email_password["password"]
            // headers:{
            //     "content-type":"application/json"
            // }
            keyword:searchentry,
            location:location_c//"Brooklyn"
          };
          var additionalParams = {
            // headers:{
            //     "Content-Type":"application/json"
            // },
            queryParams:{
              keyword: searchentry,
              location: location_c//"Brooklyn" //to be replaced by session loc
            }
          }
          apigClient.opensearchGet(params,{},additionalParams)
          .then((res) => {
            console.log("success");
            console.log(res);
            let data_arr = [];
            res.data.map(product=>data_arr.push({
              'image_File':product['productlink'],
              'label':product['productname'],
              'price':product['productprice']
            }));
            setProducState(data_arr);
          })
          .catch((err)=>{
            console.log("error");
            console.log(err);
          })
    }

    useEffect(() => {
      var params = {
        path: "/products",
        location: location_c,
        userid:userid_c//"Brooklyn"
      };
      var additionalParams = {
        queryParams:{
          location: location_c,
          userid:userid_c
        }
      };
        apigClient.productsGet(params,{},additionalParams)
        .then(function(result){
          // Add success callback code here.
          console.log("result from api");
          console.log(result);
          var temp = []
          result.data.map((product) =>{
            var temp_sub = {}
            if("productlink" in product)
            {
              temp_sub["image_File"] = product["productlink"];
            }
            else{
              temp_sub["image_File"] = product["image_File"];
            }
            temp_sub["label"] = product["label"];
            temp_sub["price"] = product["price"];
            temp_sub["product_id"] = product["product_id"];
            temp.push(temp_sub);
          })
          setProducState(temp);
          
        }).catch( function(result){
          console.log("error api")
          // Add error callback code here.
        });
    },[])
   
    //to do: on search event, update state variable with the new list
    return (    
    <>
    <Navbar></Navbar>
    <div className="container-fluid maincontainerstyle">
    <div className="row">
        <div className="col offset-sm-2 offset-md-2 offset-lg-2 col-sm-7 col-md-7 col-lg-7">
        <Searchbar onchange_func={searchentry_change} value={searchentry} placeholder="Search"></Searchbar>
        </div>

        <div className="styleforbutton col-sm-3 col-md-3 col-lg-3">
        <Button className = "buttonstyle" name="Search" handler={search}></Button>
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
                            
                            // <div className="card">
                            //     <h5 class="card-header">{}</h5>
                            //         <div className="card-body">
                            //              {/* <h5 class="card-title">{product.body1}</h5>
                            //              <p class="card-text">{product.body2}</p>
                            //              <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            //              <div className="container-fluid">
                            //                 <div className="row">
                            //                     <div className="col col-sm-7 col-md-7 col-lg-7">
                            //                         {/* <img src={product1}></img> */}
                            //                         Image here
                            //                     </div>

                            //                     <div className="col col-sm-5 col-md-5 col-lg-5">
                            //                         <ul>
                            //                             <li>
                            //                                 {product.label}
                            //                             </li>
                            //                             <li>
                            //                                 <Button name="add to cart" handler={()=>{console.log("clicked")}}></Button>
                            //                             </li>
                            //                             <li>
                            //                                 {product.price}
                            //                             </li>
                            //                         </ul>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            // </div>   
                            <div key={product.label} className="card" style={{width: "31.2%"}}>
                                {/* <img class="card-img-top" src={"https://furniture4017.s3.amazonaws.com"+product.image_File} alt="Card image cap"></img> */}
                                <img class="card-img-top" src={product.image_File} alt="Card image cap"></img>

                                 <div class="card-body">
                                    <h5 class="card-title">{product.label}</h5>
                                    {/* <p class="card-text">{product.label}</p> */}
                                </div>

                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><b>{product.price}</b></li>
                                <li class="list-group-item"><Button name="Add to Cart" handler={() => addtocart(product)}></Button></li>
                                </ul>
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