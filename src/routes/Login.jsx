import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login=()=>{
    const navigate=useNavigate();

   async function Logare(){

        await axios.post('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/login',{
            email:email,
            password:password,

        }).then(response=>{
            if(response.data.errors){
                setEroare(String(response.data.errors))
            }else{
                setEroare("")
                console.log(response)
                localStorage.setItem("user-info",response.data.token)
                navigate('/Profile')
                
            }
            
        }).catch(err=>{
            console.log(err.message)
            setEroare("Email or password is in a wrong format")
        })

    }
    const Inregistrarea=()=>{

        navigate('/SignIn')
    }
    const[eroare,setEroare]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    return(
        <div className="login">

            <label>Login</label>
            <input type="text" placeholder="Email" id="Lemail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" id="Lpassword" onChange={(e)=>setPassword(e.target.value)}></input>
            <label id="labeleroare">{eroare}</label>
            <div className="ButoaneLogin">
                <button id="ButtonLogin" onClick={Logare}>Logheaza-te</button>
                <button onClick={Inregistrarea}>Inregistreaza-te</button>
            </div>
            
            
        </div>
    )

}
export default Login;