
import './css/Login.css';
import {useState} from 'react';
import $ from "jquery";
const axios = require('axios').default;
function Login() {
  const [email,setemail]=useState('');
  const [pwd,setpwd]=useState('');
  const signupdirect=()=>{
    window.location.replace('/signup');
  };
  const submitvalue=()=>{
    
   		var data = new FormData();
		data.append('email', email);
		data.append('pwd', pwd);
   
        
          
        axios({
            method: 'post',
            url: 'http://localhost:8080/authenticate',
            data: data
          }).then(response=>
            {
             //console.log(response.data);
              if(response.data['message']==='password_failed')
              {
                  $(".perr").css("display","block");
                  $(".emailerr").css("display","none");
              }
              else if(response.data['message']==='email_failed')
              {
                $(".emailerr").css("display","block");
                $(".perr").css("display","none");

              }
              else if(response.data['message']==='success')
              {
                $(".emailerr").css("display","none");
                $(".perr").css("display","none");
		 window.location.replace('/home');
              }
            }
          );
        
    
    };

  return (
    document.title='Login',
    <div className="login-pp">
      <div className='login-container'>
        <h1 className='heading'>Welcome to Library</h1>
        <input className="email" type="email" placeholder='Enter your email' onChange={e => setemail(e.target.value)}/><br></br>
        <input className="pwd" type="password" placeholder='Enter your password' onChange={e => setpwd(e.target.value)}/><br></br>
        
        <h1 className='emailerr'>Check your email!!</h1>
        <h1 className='perr'>Check your password!!</h1>
        <button className='loginbtn'  onClick={submitvalue}>Login</button><br></br>
      <button className='signupbtn' onClick={signupdirect}>New Reader!!-Signup</button>
      
      </div>
      
    </div>
  );
}

export default Login;
