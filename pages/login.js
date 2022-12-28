import  Axios  from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';
import {UserIcon, DeviceMobileIcon, MailIcon, LockClosedIcon} from "@heroicons/react/outline";

function Login() {
    const [name,setName]=useState("");
	const [surname,setSurname]=useState("");
	const [tel,setTel]=useState("");
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	const addSignUpToDB=async(event) =>{

		const passInput=document.getElementById("psw");
		if(passInput?.value.length >= 6){
			console.log("succeed")
		}else{
			alert("Password has at least 6 characters");
			return null;
		}

		const passcopy=document.getElementById("pswcopy");
		if (passcopy.value===passInput.value) {
			console.log("succeed 2");
		}else{
			alert("passwords are not match");
			return null;
		}

		const {data} = await Axios.post('https://assignment-api.piton.com.tr/api/v1/user/register',{name: name,password: password,email: email});
		const token=data.token;
		event.preventDefault();
	}

	const loginUser=async(event)=>{
		const {data}=await Axios.post('https://assignment-api.piton.com.tr/api/v1/user/login',{password: password,email: email});
		const token=data.token;
		localStorage.setItem("token",token);
		event.preventDefault();
	}
	
  return (
    <div className='flex m-32 allOfItem bg-gray-100'>
		<div>
			<form>
				<h1 className="font-bold text-2xl">Hello!</h1>
				<p>Sign Up to Get Started</p>
				<div className='input-icons'>
				    <i className='iconname'><UserIcon/></i>	
					<input placeholder='Name' className='input-field input-common p-2 text-black m-3 focus:bg-gray-300 rounded-full mt-12' onChange={(event)=>{setName(event.target.value)}} type='text' required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><UserIcon/></i>
					<input placeholder='Surname'className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300' onChange={(event)=>{setSurname(event.target.value)}} type='text' required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><DeviceMobileIcon/></i>
					<input placeholder='Phone Number' className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300' onChange={(event)=>{setTel(event.target.value)}} type="number" pattern="[0-9]*" inputMode="numeric" required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><MailIcon/></i>
					<input placeholder='Email Address' className='input-common p-2 text-black m-3 rounded-full focus:bg-gray-300' onChange={(event)=>{setEmail(event.target.value)}} type='email' required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><LockClosedIcon/></i>
					<input id='psw' placeholder='Password' className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300' onChange={(event)=>{setPassword(event.target.value)}} type='password' required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><LockClosedIcon/></i>
					<input id='pswcopy' placeholder='Password Again' className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300' type='password' required ></input>
				</div>

				<div>
            		<button className='input-common p-2 bg-blue-600 text-white m-3 hover:bg-blue-700 rounded-full w-52 h-10 text-center' type='button' value='Submit' onClick={addSignUpToDB} >Register</button>
          		</div>

			</form>
		</div>
		<div className='br'></div>
		<div>

			<form>
				<h1 className="font-bold text-2xl">Hello Again!</h1>
				<p>Welcome Back</p>
				<div className='input-icons'>
					<i className='iconname'><MailIcon/></i>
					<input placeholder='Email Address' className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300 mt-12' type='email' required ></input>
				</div>

				<div className='input-icons'>
					<i className='icon'><LockClosedIcon/></i>
					<input placeholder='Password' className='input-common p-2 rounded-full text-black m-3 focus:bg-gray-300' type='password' required ></input>
          		</div>
					<hr className='hr'/>
				<div className='mt-2'>
					<div className='float-left ml-6 '>
						<label className='block text-gray-700 font-bold'>Remember Me</label>
					</div>
					<div className='float-left ml-2'>
						<input className='text-gray-400' type='checkbox' required />
					</div>				
				</div>	
				<Link href='/'>
					<div>
						<button className='input-common p-2 text-white m-3 bg-blue-600 text-white m-3 hover:bg-blue-700 rounded-full w-52 h-10 text-center' type='button' value='Submit' onClick={loginUser} >login</button>
					</div>
				</Link>			
			</form>
		</div>

	</div>
  )
}

export default Login;