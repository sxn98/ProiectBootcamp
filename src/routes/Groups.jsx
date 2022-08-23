import ShowGroups from '../hooks/ShowGroups'
import {Adauga} from '../context/AddGroup'
import { useNavigate } from 'react-router-dom'
import '../css/Grup.css'
const Groups=()=>{

    const navigate=useNavigate();
    const AdaugareGrup=()=>{
        Adauga()  
        navigate('/Groups')
          
    }

    return(
        <div className="grup">
                <table className="tabelgrup">
                
                    <tr>
                        <th> Grupuri</th>
                        <th><button onClick={AdaugareGrup}>Grup nou</button></th>
                    </tr>

                    <ShowGroups/>
                
                </table>
            </div>
    )

}
export default Groups;