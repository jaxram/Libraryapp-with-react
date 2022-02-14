import './css/Signup.css';
import {useState} from 'react';
import $ from "jquery";

const axios = require('axios').default;
function Signup() {
   
    const [email,setemail]=useState('');
    const [name,setname]=useState('');
    const [mobile,setmobile]=useState('');
    const [pwd,setpwd]=useState('');
    const [cpwd,setcpwd]=useState('');
    const [location,setlocation]=useState('');
    const submitvalue=()=>{
        console.log(email);
        console.log(name);
        ((pwd!==cpwd))?$(".passerr").css("display", "block"):$(".passerr").css("display", "none");
        if(email===''||name===''||mobile===''||pwd===''||cpwd===''||location==='')
        {
            $(".deterr").css("display", "block");
        }
        else
        {
            $(".deterr").css("display", "none");
            
              	var data = new FormData();
		data.append('email', email);
		data.append('name', name);
		data.append('mobile', mobile);
		data.append('cpwd', cpwd);
		data.append('location', location);
            axios({
                method: 'post',
                url: 'http://localhost:8080/userdata',
                data:data
              }).then(response=>{
                console.log('success');
                console.log(response.data['message']);
              });
            





        
        };
        
    } 
    return(
       
        document.title='Signup',
        <div className='signup-app'>

            <div className='signup-container'>
                <h1 className='signup-head'>Welcome new reader</h1>
                <input className="email" type="email" placeholder='Enter your email' onChange={e => setemail(e.target.value)}/><br></br>
                <input className="name" type="text" placeholder='Enter your name' onChange={e => setname(e.target.value)}/><br></br>
                <input className="mobile" type="number" placeholder='Enter your mobile' onChange={e => setmobile(e.target.value)}/><br></br>
                <input className="pwd" type="password" placeholder='Enter your password' onChange={e => setpwd(e.target.value)}/><br></br>
                <input className="cpwd" type="password" placeholder='Confirm your password' onChange={e => setcpwd(e.target.value)}/><br></br>
                <input className='location' type='text' placeholder='Village/Town/City' onChange={e => setlocation(e.target.value)}/><br></br>
                <h1 className='passerr'>Password didn't match</h1>
                <h1 className='deterr'>Enter all the details</h1>
                <button className='loginbtn' onClick={submitvalue}>Signup</button><br></br>
            </div>
    
        </div>
    );
    
};
export default Signup;