import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignIn=()=>{
    const navigate=useNavigate();

    async function Inregistrarea(){
        
        console.log(email,password,dob,name,phone)
        let item ={email,password,dob,name,phone}
        let result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
       
        result=await result.json()
        console.log(item)
        console.log(result)
        //localStorage.setItem(JSON.stringify(result))
        navigate('/')
        
    }

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[dob,setDob]=useState("")
    return(
        <div className="signin">    
            <label>Inregistrare</label>
            <input type="text" placeholder="Username" id="Susername" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" placeholder="Password" id="Spassword" onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="text" placeholder="Confirm Password" id="SConfirm"></input>
            <input type="text" placeholder="Email" id="Semail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" placeholder="Date of Birth" id="Sdob" onChange={(e)=>setDob(e.target.value)}></input>
            <input type="text" placeholder="Phone Number" id="Sphone" onChange={(e)=>setPhone(e.target.value)}></input>
            <button id="ButtonInregistrare" onClick={Inregistrarea}>Inregistreaza-te</button>

            
            
        </div>
    )

}
export default SignIn;