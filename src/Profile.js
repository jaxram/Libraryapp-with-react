import './css/Profile.css';
import {useState} from 'react';
const axios = require('axios').default;

function Profile()
{
	
	  const [name,setname]=useState('');
  	  const [mobile,setmobile]=useState('');
	  const [location,setlocation]=useState('');
 	const submitvalue=()=>{
	 var data = new FormData();
	 data.append('name', name);
	 data.append('mobile', mobile);
         data.append('location',location);
	   axios({
            method: 'post',
            url: 'http://localhost:8080/profiledata',
            data: data
          }).then(response=>
            {
		console.log(response.data);
		});
	};
    return(
        document.title='Profile',
        <div className='profile-app'>

            <div className='profile-container'>
                <h1 className='profile-head'>Edit profile</h1>
                <img  className='profile-img'src={require('./images/7.png').default} /> 
               <button className='change-dp'> <i class="far fa-user"></i></button><br></br>
               
                <input className="name" type="text" placeholder='Enter your name' onChange={e => setname(e.target.value)} /><br></br>
                <input className="mobile" type="number" placeholder='Enter your mobile' onChange={e => setmobile(e.target.value)}/><br></br>
                <input className='location' type='text' placeholder='Village/Town/City' onChange={e => setlocation(e.target.value)}/><br></br>
                <button className='profilebtn'>Make changes</button><br></br>
            </div>
        </div>

);
};

export default Profile;