import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
const App = () => {
  return (
    
    <div className="container-fluid">

      <div className='row'>
        <Navbar></Navbar>
      </div>
      <div className='row'>
        <h3 style={{marginTop:"2%",textAlign:"center"}}>Register</h3>
      </div>
      <hr></hr>
      <div className='row containerinpstyle' align= "center">
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField align="center" id="fname" placeholder="Username"></InputField>
              <InputField id="lname" type="text"  placeholder="Email"></InputField>
              <InputField id="address" type="text"  placeholder="Password"></InputField>
              <InputField id="apt" type="text"  placeholder="Confirm"></InputField>
        </div>
      </div>
      <br />
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
              <Button name="Confirm" size="large" handler={()=>{console.log("clicked")}}></Button>
        </div>
      </div>
    </div>
  )
}
export default App;
