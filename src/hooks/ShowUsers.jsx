import { useState,useEffect } from 'react'
import AddUser from '../utils/AddUser';
import getUsers from '../utils/getUser';
import getGroupUsers from '../utils/getGroupUsers';
import { useParams } from 'react-router-dom';
const ShowUsers=(dateGrup)=>{
    
    const[dataUsers,setDataUsers]=useState("");
    const[numeUser,setNumeUser]=useState("")
    const[userId,setUserId]=useState("")
    const[grupID,setGrupID]=useState(dateGrup.value[0])
    const[grupName,setGrupName]=useState(dateGrup.value[1].grup)


    const AdaugareUser=async ()=>{
        await getUsers(numeUser).then(idTrimis=>{
            setUserId(idTrimis[0]?.id)
            AddUser(grupID,idTrimis[0]?.id)
        })

        //setMesaj(`Ati adaugat ${numeUser}!`)
    }
    useEffect(()=>{
        getGroupUsers(grupName).then(participanti=>{
                console.log(participanti)
                setDataUsers(participanti)
                
        })
    
        },[])
    
        let rows=[]
        for(let i=0;i<dataUsers.length;i++){
            rows.push(
                <tr key={dataUsers[i].id}>
                    <td>{dataUsers[i].name}</td>

                </tr>
            )
        }

    return(

        <div className='divusergroup'>
            <input type="text" placeholder="adauga persoana" onChange={(e)=>setNumeUser(e.target.value)}></input>
            <button onClick={AdaugareUser}>Adauga</button>

            <table className="tabelusersgrup">
                <tbody>
                    <tr>
                        <th> Participanti</th>
                            
                    </tr>

                    {rows}
                </tbody>
            </table>
        </div>
    )
}
export default ShowUsers;