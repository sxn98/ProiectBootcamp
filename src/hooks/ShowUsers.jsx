import { useState,useEffect } from 'react'
import AddUser from '../utils/AddUser';
import getUsers from '../utils/getUser';
import { useParams } from 'react-router-dom';
import { getGrupuriSearch } from '../utils/getGrupuri';
const ShowUsers=(dateGrup)=>{
    let rows=[]
    let inputAdaugarePersoana=[]

    const[Owner,setOwner]=useState(dateGrup.value[2])
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
        getGrupuriSearch(grupName).then(participanti=>{
           // console.log(participanti[0].users)
            setDataUsers(participanti[0].users)    
        })
    
        },[])
    
        console.log(dateGrup.value[3])
        for(let i=0;i<dataUsers.length;i++){
           //console.log(dateGrup.value[2],dataUsers[i].id)
           if(dateGrup.value[2]==dataUsers[i].id){
            rows.push(
                <tr key={dataUsers[i].id}>
                    <td className='owner'>{dataUsers[i].name + " 👑"}</td>

                </tr>
            )
           }else{
            rows.push(
                <tr key={dataUsers[i].id}>
                    <td>{dataUsers[i].name }</td>

                </tr>
            )
           }
            
        }
        if(dateGrup.value[3]===true){
            inputAdaugarePersoana.push(
                <div className='adaugare' key="adaugare">
                    <label>Adaugare persoane noi</label>
                    <input type="text" placeholder="adauga persoana" onChange={(e)=>setNumeUser(e.target.value)}></input>
                    <button onClick={AdaugareUser}>Adauga</button>
                </div>
            )
        }

    return(

        <div className='divusergroup'>

            <table className="tabelusersgrup">
                <tbody>
                    <tr>
                        <th> Participanti</th>
                            
                    </tr>

                    {rows}
                </tbody>
            </table>

            {inputAdaugarePersoana}
        </div>
    )
}
export default ShowUsers;