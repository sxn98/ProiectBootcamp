import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const SignIn=()=>{
    const navigate=useNavigate();

    async function Inregistrarea(){
    
        await axios.post('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/register',{
            email:email,
            password:password,
            dob:dob,
            name:name,
            phone:phone
        }).then(response=>{
            console.log(response.data)
            navigate('/')
        }).catch(err=>{

            setEroare(err.response.data.errors[0].msg)
        })
        
    }
    const[eroare,setEroare]=useState("")
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
            <input type="text" placeholder="DoB(yyyy-mm-dd)" id="Sdob" onChange={(e)=>{setDob(e.target.value);console.log(dob)}}></input>
            <input type="text" placeholder="Phone Number" id="Sphone" onChange={(e)=>setPhone(e.target.value)}></input>
            <button id="ButtonInregistrare" onClick={Inregistrarea}>Inregistreaza-te</button>
            <label >{eroare}</label>

            
            
        </div>
    )

}
export default SignIn;