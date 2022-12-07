import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";
import InputFieldNoLabel from "./components/inputFieldNoLabel";
import Button from "./components/button";
import TextArea from "./components/TextArea";
    function CreateListing() {
        let choices = ["Bedding","Kitchenware"];
        let defaultChoice = "Select a category";
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
                        <Dropdown className="dropdownstyle" choices={choices} defaultChoice={defaultChoice}></Dropdown>
                        <InputFieldNoLabel id="pname" text="pname" type="text" placeholder="Product Name"></InputFieldNoLabel>
                        {/* <InputFieldNoLabel id="pdesc" text="pdesc" type="text" placeholder="Product Description"></InputFieldNoLabel> */}
                        <TextArea id="txtarea" placeholder="Enter Product Description"></TextArea>
                        <InputFieldNoLabel id="price" text="price" type="text" placeholder="Enter Price"></InputFieldNoLabel>
                        <input style={{marginTop:"10px", marginLeft:"7px"}} className="form-control" type="file" id="myFile" name="filename"></input>
                        <Button name="Post" size="large" handler={()=>{console.log("clicked")}}></Button>
                        </div>

                    </div>
                </div>



            </>
        );
    }
export default CreateListing;