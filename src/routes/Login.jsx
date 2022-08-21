import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();
    const Logare=()=>{
        navigate('/Profile') 

    }
    const Inregistrarea=()=>{
        navigate('/SignIn')
    }

    return(
        <div className="login">

            <label>Login</label>
            <input type="text" placeholder="Username" id="Lusername"></input>
            <input type="text" placeholder="Password" id="Lpassword"></input>
            
            <div className="ButoaneLogin">
                <button id="ButtonLogin" onClick={Logare}>Logheaza-te</button>
                <button onClick={Inregistrarea}>Inregistreaza-te</button>
            </div>
            
            
        </div>
    )

}
export default Login;