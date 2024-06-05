import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
interface user{
  name:string,
  email:string,
  pass:string
}
let users:user={
  name:"duy",
  email:"1@gmail.com",
  pass:"123456"
}

export default function Login() {
  const navigate=useNavigate()
  const login =()=>{
    let i = document.getElementById("name") as HTMLInputElement 
    let k = document.getElementById("email") as HTMLInputElement
    let m = document.getElementById("pass") as HTMLInputElement
    if(i.value===users.name && k.value===users.email && m.value===users.pass){
      alert("thanh cong")  
      navigate("/Id") 
    }
    else{
      alert("saiiii")
    }
  }
  
  return (
    <div>
        <p>name</p>
        <input type="text" id='name'/>
        <p>Email</p>
        <input type="text" id='email' />
        <p>Password</p>
        <input type="text" id='pass'/>
        <button onClick={login}>Login</button>
    </div>
  )
}
