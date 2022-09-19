import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const SignIn=()=>{
    const navigate=useNavigate();

    async function Inregistrarea(){
        if(containLetter.test(phone)){
            setEroare(`Campul "Phone" nu trebuie sa contina litere!`)
            return
        }
        if(password!==confirmPassword){
            setEroare(`Campul "Confirmare parola" nu este identic cu "Parola"`)
            return
        }
        if(name && password && password && email && phone && dob ){
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
        }else{
            setEroare('Completati toate campurile')
        }
        
        
    }
    const containLetter=/[a-zA-Z]/g
    const[eroare,setEroare]=useState("")
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[dob,setDob]=useState("")
    return(
        <div className="signin">    
            <label>Inregistrare</label>
            <input type="text" placeholder="Username" id="Susername" onChange={(e)=>setName(e.target.value)}></input>
            <input type="password" placeholder="Password" id="Spassword" onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="password" placeholder="Confirm Password" id="SConfirm" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
            <input type="text" placeholder="Email" id="Semail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" placeholder="DoB(yyyy-mm-dd)" id="Sdob" onChange={(e)=>{setDob(e.target.value);console.log(dob)}}></input>
            <input type="text" placeholder="Phone Number" id="Sphone" onChange={(e)=>setPhone(e.target.value)}></input>
            <button id="ButtonInregistrare" onClick={Inregistrarea}>Inregistreaza-te</button>
            <label >{eroare}</label>

            
            
        </div>
    )

}
export default SignIn;