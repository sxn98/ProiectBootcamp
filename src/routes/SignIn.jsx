import { useNavigate } from "react-router-dom";

const SignIn=()=>{
    const navigate=useNavigate();

    const Inregistrarea=()=>{
        navigate('/Profile')
    }
    return(
        <div className="signin">    
            <label>Inregistrare</label>
            <input type="text" placeholder="Username" id="Susername"></input>
            <input type="text" placeholder="Password" id="Spassword"></input>
            <input type="text" placeholder="Confirm Password" id="SConfirm"></input>
            <button id="ButtonInregistrare" onClick={Inregistrarea}>Inregistreaza-te</button>

            
            
        </div>
    )

}
export default SignIn;