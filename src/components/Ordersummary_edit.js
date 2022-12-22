import { useState , useEffect} from 'react';

const Ordersummary_edit = ({list,tax}) => {
//list is assumed to be an array of objects.
//each object might look like this {
//     img:"link to image",
//     name:"table lamp",
//     price:"",
//     qty:"",
//     total:"",
//     prodid
//    
// }

let SubTotal = list.reduce((total,item)=>{
    total += item.total;
    return total;
},0)
const [productstate,setProductState] = useState({"prod":list,"tot":SubTotal});
// const changeqty = (event,index) =>{
//     //todo check against the available inventory if these many items are actuallly available
//     //if yes, do all these and update in DB
// console.log(event.target.value);
// console.log(index);
// //index is the product whose qty is changed
// let temp = productstate.prod; //a list of products
// temp[index].qty = parseInt(event.target.value);
// temp[index].total = temp[index].qty*temp[index].price||0;
// let new_total = temp.reduce((total,item)=>{
//     total += item.total;
//     return total;
// },0)

// setProductState({prod:temp,tot:new_total});
// //DB update
// var apigClient = window.apigClientFactory.newClient();
// console.log(apigClient);
// var params = {
//     //path: "/carts",
//     username: "testuser1"
//     // headers:{
//     //     "content-type":"application/json"
//     // }
//   };
//   var additionalParams = {
//     headers:{
//         "Content-Type":"application/json"
//     },
//     queryParams:{
//         username:"testuser1"
//     }
//   }
//   var body = {
//     "products":temp
//   };

//   apigClient.cartsPut(params,body,additionalParams)
//   .then(function(result){
//     // Add success callback code here.
//     console.log("result from api");
//     console.log(result);
//   }).catch( function(result){
//     console.log("error api")
//     console.log(result);
//     // Add error callback code here.
//   });
// }
return (
<>
<table className="table table-striped table-responsive">
    <thead className="thead-dark">
    <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        {/* <th>Quantity</th> */}
        <th>Total</th>
    </tr>
    </thead>
    <tbody>
    {productstate.prod.map((product,index) => {
        return(
        <tr key={product.img}>
            <td><img src={product.img} width="80px" height="80px" style={{"verticalAign":"middle"}}></img></td>
            <td>{product.name}</td>
            <td>{"$"+product.price}</td>
            {/* <td><input contentEditable = "true" defaultValue={parseInt(product.qty)} onChange={event => changeqty(event,index)}></input></td> */}
            <td>{"$"+(product.total)||0}</td>
        </tr>
        )
    })}
    <tr key="total">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><b>{"SubTotal: $"+productstate.tot}</b></td>
    </tr>

    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>{"Taxes: $"+(tax || 0)}</b></td>
    </tr>

    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>{"Total: $"+(productstate.tot+(tax || 0))}</b></td>
    </tr>
    </tbody>
</table>
</>
)
}
export default Ordersummary_edit;