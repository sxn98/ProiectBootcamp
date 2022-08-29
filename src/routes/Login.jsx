import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login=()=>{
    const navigate=useNavigate();

   const Logare=()=>{

        console.log(email,password)
        let item ={email,password}
        fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(item)
                console.log(result)
                localStorage.setItem("user-info",JSON.stringify(result))

                if(!JSON.stringify(result['errors'])){
                    //navigate('/Profile')
                }else{
                    document.getElementById('labeleroare').innerHTML=result['errors']
                    console.log(JSON.stringify(result['errors']))
                }
            })
            
            
        });

        
       
        //navigate('/Profile') 

    }
    const Inregistrarea=()=>{

        navigate('/SignIn')
    }

    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    return(
        <div className="login">

            <label>Login</label>
            <input type="text" placeholder="Email" id="Lemail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" placeholder="Password" id="Lpassword" onChange={(e)=>setPassword(e.target.value)}></input>
            <label id="labeleroare">aaa</label>
            <div className="ButoaneLogin">
                <button id="ButtonLogin" onClick={Logare}>Logheaza-te</button>
                <button onClick={Inregistrarea}>Inregistreaza-te</button>
            </div>
            
            
        </div>
    )

}
export default Login;