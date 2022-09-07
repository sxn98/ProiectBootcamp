import { useState } from 'react'
import AddUser from '../utils/AddUser';
import getUsers from '../utils/getUser';

const ShowUsers=(idGrup)=>{

    const[data,setData]=useState("");
    const[nume,setNume]=useState("")
    const[userId,setUserId]=useState("")


    const AdaugareUser=async ()=>{
        await getUsers(nume).then(idTrimis=>{
            setUserId(idTrimis[0]?.id)
            AddUser(idGrup.value,idTrimis[0]?.id)
        })

        //setMesaj(`Ati adaugat ${nume}!`)
    }
    return(

        <div className='divusergroup'>
            <input type="text" placeholder="adauga persoana" onChange={(e)=>setNume(e.target.value)}></input>
            <button onClick={AdaugareUser}>Adauga</button>

            <table className="tabelusersgrup">
                <tbody>
                    <tr>
                        <th> Participanti</th>
                            
                    </tr>
                    <tr>
                        <td >persoana</td>
                        <td><button>Elimina</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default ShowUsers;