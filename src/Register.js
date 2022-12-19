import InputField from './components/inputField.js';
import Button from './components/button.js'
import Navbar from './components/navbar.js';
import { useState , useEffect} from 'react';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLoc] = useState('');

  const username_change = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  const email_change = (event) => {
    setEmail(event.target.value);
  }

  const pass_change = (event) => {
    setPass(event.target.value);
  }
  const loc_change = (event) => {
    setLoc(event.target.value);
  }
  const register = () => {
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
        password:password,
        username:username,
        location:location
      }
    }
    apigClient.registerPost(params,{},additionalParams)
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
              <InputField align="center" id="username" placeholder="Username" onchange_func={username_change} value={username}></InputField>
              <InputField id="email" type="text"  placeholder="Email" onchange_func={email_change} value={email}></InputField>
              <InputField id="password" type="text"  placeholder="Password" onchange_func={pass_change} value={password}></InputField>
              <InputField id="location" type="text" placeholder="Location" onchange_func={loc_change} value={location}></InputField>
              {/* <InputField id="apt" type="text"  placeholder="Confirm"></InputField> */}
        </div>
      </div>
      <br />
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-4 offset-lg-3 offset-md-3 offset-sm-3'>
              <Button name="Confirm" size="large" handler={register}></Button>
        </div>
      </div>
    </div>
  )
}
export default Register;
