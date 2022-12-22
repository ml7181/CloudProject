import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
import Register from './Register';
import { useState , useEffect} from 'react';
// import Popup from 'reactjs-popup';
import CryptoJS from 'crypto-js';
// import Cookies from 'react-cookies';
import Cookies from 'js-cookie';
import { Route } from 'react-router-dom';
import {Router} from 'react-router-dom';
import { Link,Switch } from 'react-router-dom';
import { BrowserRouter,Routes } from 'react-router-dom';
import HomePage from './homepage.js';
import { Navigate,useNavigate } from 'react-router-dom';

const Login2 = () => {
  const navigate = useNavigate();
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
      Cookies.set('email',res.data.email);
      Cookies.set('username',res.data.username);
      Cookies.set('location',res.data.location);
      Cookies.set('userid',res.data.user_id);
      // return <Navigate to="/home" replace={true}/>;
      const c_username = Cookies.get('username');
      const c_email = Cookies.get('email');
      const c_location = Cookies.get('location');
      const c_userid = Cookies.get('userid');
      navigate("/home?username="+c_username+"&email="+c_email+"&location="+c_location+"&userid="+c_userid)
      // navigate("/home",{ state:  {"username":c_username,"email":c_email,"location":c_location} });
      //redirect to home page
    })
    .catch((err)=>{
      console.log("error");
      if(err.data.error)
      {
      seterror(err.data.error)
      }
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
    console.log(CryptoJS.SHA256(event.target.value));
    setPass(CryptoJS.SHA256(event.target.value));
  }

  function handleEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  return (
    // <BrowserRouter>
    // <Routes>
      
    //   <Route exact path="/register" element={<Register />}>
    //     {/* <Route index element={<Login2 />} /> */}
    //     {/* <Route path="blogs" element={<Blogs />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NoPage />} /> */}
    //   </Route>
    // </Routes>
    <div className="container-fluid">

      <div className='row'>
        <Navbar></Navbar>
      </div>
      <div className='row'>
        <h3 style={{marginTop:"2%",textAlign:"center"}}>Login</h3>
      </div>
      <hr></hr>
      {/* <div className='row'></div> */}
      <div className='row containerinpstyle' align= "center">
        <div className='emailstyle col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField align="center" id="fname" placeholder="Enter your email" onchange_func={event=>handleEmailChange(event)} value={email}></InputField>
        </div>
        <div className='passtyle col-lg-4 col-md-4 col-sm-4 offset-lg-4 offset-md-4 offset-sm-4' align="center">
              <InputField id="lname" type="password" placeholder="Enter your password" value={password} onchange_func={(event)=>{handlePassChange(event)}}></InputField>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-5 offset-md-5 offset-sm-5'>
              <Button name="Login" size="large" handler={login_handle}></Button>
        </div>
        </div>
        <br></br>
        {
          (error != "") &&(
          <div className='row'>
            <div className='errorstyle alert alert-danger' role="alert">
              <div className='offset-sm-3 offset-md-3 offset-lg-3 col-sm-6 col-md-6 col-lg-6'>
              {error}
              </div>
            </div>
          </div>
          )
         
        }
        
        <div className='row'>
          <div className='offset-sm-5 offset-md-5 offset-lg-5 col-lg-4 col-sm-4 col-md-4'>
          <Link to="/register" className="btn"replace="true">Sign Up Here</Link>
          </div>
        </div>
        </div>
        // </BrowserRouter>
  )
}
export default Login2;
