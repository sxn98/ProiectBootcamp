import { useState,useEffect } from 'react'
import AddUser from '../utils/AddUser';
import getUsers from '../utils/getUser';
import { useNavigate, useParams } from 'react-router-dom';
import { getGrupuriSearch } from '../utils/getGrupuri';
import DeleteGroup from '../utils/DeleteGroup';
const ShowUsers=(dateGrup)=>{
    let rows=[]
    let inputAdaugarePersoana=[]
    const navigate=useNavigate()



    const[Owner,setOwner]=useState(dateGrup.value[2])
    const[dataUsers,setDataUsers]=useState("");
    const[numeUser,setNumeUser]=useState("")
    const[grupName,setGrupName]=useState(dateGrup.value[1].grup)
    const[mesaj,setMesaj]=useState("")


    const AdaugareUser= ()=>{
         getUsers(numeUser).then(idTrimis=>{
            AddUser(dateGrup.value[0],idTrimis[0]?.id).then(rezultat=>{
          
                if(rezultat){
                    setMesaj(`ati adaugat userul pe nume "${numeUser}"`)
                }
            })
            
        })


    }
    const StergereGrup=(idGrupSters)=>{
        DeleteGroup(idGrupSters)
        navigate('/Groups')
    }
    useEffect(()=>{
        getGrupuriSearch(grupName).then(participanti=>{

            setDataUsers(participanti[0].users)    
        })
        
        if(!localStorage.getItem('user-info')){
            console.log('')
            navigate('/')
    }
        },[mesaj])
    

        for(let i=0;i<dataUsers.length;i++){

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
                <div className='adaugareUser' key="adaugare">
                    <label>Adaugare persoane noi</label>
                    <input type="text" placeholder="adauga persoana" onChange={(e)=>setNumeUser(e.target.value)}></input>
                    <button onClick={AdaugareUser}>Adauga</button>
                    <button className='stergereGrup' onClick={(e)=>{StergereGrup(dateGrup.value[0])}}>Sterge grupul</button>
                </div>
            )
        }

    return(

        <div className='divusergroup'>

            <table className="tabelusersgrup">
                <tbody>
                    <tr>
                        <th> Participantii grupului "{dateGrup.value[1].grup}"</th>
                            
                    </tr>

                    {rows}
                </tbody>
            </table>
            
            {inputAdaugarePersoana}
            <label>{mesaj}</label>
        </div>
    )
}
export default ShowUsers;