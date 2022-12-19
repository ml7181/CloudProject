import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
import Register from './Register';
import { useState , useEffect} from 'react';
import Popup from 'reactjs-popup';
const Login2 = () => {
  const login_handle = ()=>{
    //console.log("hi");
    var apigClient = window.apigClientFactory.newClient();
    var params = {
      //path: "/carts",
      // email: email_password["email"],
      // password:email_password["password"]
      // headers:{
      //     "content-type":"application/json"
      // }
    };
    var additionalParams = {
      // headers:{
      //     "Content-Type":"application/json"
      // },
      queryParams:{
        email: email,
        password:password
      }
    }
    apigClient.usersPost(params,{},additionalParams)
    .then((res) => {
      console.log("success");
      console.log(res);
    })
    .catch((err)=>{
      console.log("error");
      console.log(err);
    })
  }
  // const [email_password,setstate] = useState({email:"",
  //                                   password:""});
  // const setemail = (event)=>{
  //   setstate({
  //     email:event.target.value,
  //     password:email_password["password"]
  //   });
  // }

  // const setpass = (event)=>{
  //   setstate({
  //     email:email_password["email"],
  //     password:event.target.value
  //   });
  // }


  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [error,seterror] = useState("");
  function handlePassChange(event) {
    console.log(event.target.value);
    setPass(event.target.value);
  }

  function handleEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

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
              <InputField align="center" id="fname" placeholder="Enter your email" onchange_func={event=>handleEmailChange(event)} value={email}></InputField>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField id="lname" type="password" placeholder="Enter your password" value={password} onchange_func={(event)=>{handlePassChange(event)}}></InputField>
        </div>
      </div>
      <br />
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
              <Button name="Login" size="large" handler={login_handle}></Button>
        </div>
      <br />
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-2 offset-md-2 offset-sm-2'>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<a href= 'Register.js'>  Or Sign up here!  </a>
        </div>
        </div>
      </div>
  )
}
export default Login2;
