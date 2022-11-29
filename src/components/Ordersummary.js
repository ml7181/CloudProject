const Ordersummary = ({list,tax}) => {
//list is assumed to be an array of objects.
//each object might look like this {
//     img:"link to image",
//     name:"table lamp",
//     price:"",
//     qty:"",
//     total:"",
//    
// }
let SubTotal = list.reduce((total,item)=>{
    total += item.total;
    return total;
},0)
return (
<>
<table className="table table-striped table-responsive">
    <thead className="thead-dark">
    <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
    </tr>
    </thead>
    <tbody>
    {list.map(product => {
        return(
        <tr key={product.img}>
            <td><img src={product.img} width="80px" height="80px" style={{"verticalAign":"middle"}}></img></td>
            <td>{product.name}</td>
            <td>{"$"+product.price}</td>
            <td>{product.qty}</td>
            <td>{"$"+product.total}</td>
        </tr>
        )
    })}
    <tr key="total">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><b>{"SubTotal: $"+SubTotal}</b></td>
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
        <td><b>{"Total: $"+(SubTotal+(tax || 0))}</b></td>
    </tr>
    </tbody>
</table>
</>
)
}
export default Ordersummary;