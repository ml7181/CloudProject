import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";
import InputFieldNoLabel from "./components/inputFieldNoLabel";
import Button from "./components/button";
import TextArea from "./components/TextArea";
import { Buffer } from 'buffer';
import { useState , useEffect} from 'react';
    function CreateListing() {
        let choices = ["Bedding","Kitchenware"];
        let defaultChoice = "Select a category";
        const [pname, setpname] = useState('');
        const [pdesc, setpdesc] = useState('');
        const [pprice,setpprice] = useState(0);
        const [file,setfile] = useState({
            file:{name:""},
            fileDataUrl:""
        });
        const [fileb64,setfileb64] = useState("");
        const [qty,setqty] = useState(0);
        const [category,setcategory] = useState("");
        const [pcond,setpcond] = useState("");
      
        const pname_save = (event) =>{
            console.log(event.target.value);
            setpname(event.target.value);
        };
        const pdesc_save = (event) => {
            console.log(event.target.value);
            setpdesc(event.target.value);
        };
        const pprice_save = (event) => {
            console.log(event.target.value);
            setpprice(event.target.value);
        };
        const filename_save = (event) => {
            //console.log(event);
            console.log(event.target.value);
            const file_e = event.target.files[0]
            //setfile(String(event.target.value));
            const reader = new FileReader();

            reader.onloadend = () => {
                setfile({
                  file: file_e,
                  fileDataUrl: reader.result
                });
              };
              reader.readAsDataURL(file_e);

              //

            // const file = event.target.files[0];
            // const reader = new FileReader();
            // reader.onloadend = () => {
            // const base64Image = btoa(reader.result);
            // setBase64Image(base64Image);
            // };
            // reader.readAsBinaryString(file);

            /////////




// const file = event.target.files[0];
// const reader = new FileReader();

// reader.onloadend = () => {
//   const base64Image = Buffer.from(reader.result).toString('base64');
//   setfileb64(base64Image);
// };

// reader.readAsArrayBuffer(file);
        };
        const qty_save = (event) => {
            console.log(event.target.value);
            setqty(event.target.value);
        };
        const category_save = (event) =>{
            console.log(event.target.value);
            setcategory(event.target.value);
        }
        const pcond_save = (event) => {
            setpcond(event.target.value);
        }
        const create_listing = () => {
            var apigClient = window.apigClientFactory.newClient();
            var params = {
                // headers:{
                // "Content-Type":"application/json"
                // }
                headers:{
                    "Content-Type":"application/json"
                }
            };
            var additionalParams = {
          
                headers:{
                    "Content-Type":"application/json"
                }

            //   queryParams:{
            //     email: email,
            //     password:password
            //   }
            };
            var body = {
                "productcat":category,
                "productname":pname,
                "productdesc":pdesc,
                "productprice":pprice,
                "productqty":qty,
                "username":"ml7181@nyu.edu", //to be replaced by session variable
                "location":"Brooklyn",//to be replaced by session variable
                "condition":pcond,
                "file":file.fileDataUrl
                //"file":fileb64
            };
            apigClient.listingsPost(params,body,additionalParams)
            .then((res) => {
              console.log("success");
              console.log(res);
            })
            .catch((err)=>{
              console.log("error");
              console.log(err);
            })
        }
        return (
            <>
                <Navbar></Navbar>
                <div className='row'>
                    <h3 style={{ marginTop: "2%", textAlign: "center" }}>Create Listing</h3>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col offset-sm-4 offset-md-4 offset-lg-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                        <Dropdown className="dropdownstyle" choices={choices} defaultChoice={defaultChoice} onchange_func={category_save} value={category}></Dropdown>
                        <InputFieldNoLabel id="pname" text="pname" type="text" placeholder="Product Name" onchange_func={pname_save} value={pname}></InputFieldNoLabel>
                        {/* <InputFieldNoLabel id="pdesc" text="pdesc" type="text" placeholder="Product Description"></InputFieldNoLabel> */}
                        <TextArea id="txtarea" placeholder="Enter Product Description" onchange_func={pdesc_save} value={pdesc}></TextArea>
                        <InputFieldNoLabel id="price" text="price" type="text" placeholder="Enter Price" onchange_func={pprice_save} value={pprice}></InputFieldNoLabel>
                        <input style={{marginTop:"10px", marginLeft:"7px"}} className="form-control" type="file" id="myFile" name="filename" onChange={filename_save}></input>
                        <InputFieldNoLabel id="condition" text="condition" type="text" placeholder="Enter Product Condition" onchange_func={pcond_save} value={pcond}></InputFieldNoLabel>
                        <InputFieldNoLabel id="qty" text="quantity" type="number" placeholder="Product Quantity" value={qty} onchange_func={qty_save}></InputFieldNoLabel>
                        <Button name="Post" size="large" handler={create_listing}></Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
export default CreateListing;