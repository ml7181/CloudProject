import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
import Register from './Register';
const App = () => {
  return (
    
    <div className="container-fluid">

      <div className='row'>
        <Navbar></Navbar>
      </div>
      <div className='row'>
        <h3 style={{marginTop:"2%",textAlign:"center"}}>Login</h3>
      </div>
      <hr></hr>
      <div className='row containerinpstyle' align= "center">
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField align="center" id="fname" placeholder="Enter your email"></InputField>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField id="lname" type="password" placeholder="Enter your password"></InputField>
        </div>
      </div>
      <br />
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
              <Button name="Login" size="large" handler={()=>{console.log("clicked")}}></Button>
        </div>
      <br />
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-2 offset-md-2 offset-sm-2'>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<a href= 'Register.js'>  Or Sign up here!  </a>
        </div>
        </div>
      </div>
  )
}
export default App;
