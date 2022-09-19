import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContextGrup } from '../routes/Groups'
import getSharedGroups from '../utils/getSharedGroups'
import getMe from '../utils/getMe'
import UpdateGroup from '../utils/UpdateGroup'
import DeleteGroup from '../utils/DeleteGroup'
const ShowGroups=()=>{
    const navigate=useNavigate();

    const[dataGrup,setDataGrup]=useState("");
    const[schimbat,setSchimbat]=useContext(StateContextGrup)
    const[myId,setMyId]=useState("")
    const[numeGrup,setNumeGrup]=useState("")
    const[detalii,setDetalii]=useState("")
    const[idGrupSchimbat,setIdGrupSchimbat]=useState("")
    const[formHidden,setFormHidden]=useState(true)


   const AfisareGrupPersoane=(e)=>{
    navigate(`/Groups/${e.target.innerText}`)

   }

   const SetareDate=(propGrup)=>{
    setNumeGrup(propGrup.name)
    setDetalii(propGrup.details)
    setIdGrupSchimbat(propGrup.id)
}

    const Actualizare=async ()=>{
        await UpdateGroup(numeGrup,detalii,idGrupSchimbat)
        setFormHidden(true)
        
        
    
    }
   useEffect(()=>{
    if(!localStorage.getItem('user-info')){
        navigate('/')
    }

    getSharedGroups().then(rezultat=>{
        setDataGrup(rezultat)
       
      
    })
    getMe().then(eu=>{
        setMyId(eu.id)
    })
    

    },[schimbat,formHidden])

    let rows=[]
    for(let i=0;i<dataGrup.length;i++){

        if(myId===dataGrup[i].Group.ownerId){
            rows.push(
                <tr key={dataGrup[i]?.Group?.id}>
                    <th onClick={AfisareGrupPersoane}>{dataGrup[i]?.Group?.name}</th>
                    <td>{dataGrup[i]?.Group?.details}</td>
                    <td><button onClick={(e)=>{SetareDate(dataGrup[i].Group);setFormHidden(false)}}>Modifica</button></td>
                    <td><button onClick={async (e)=>{
                    await DeleteGroup(dataGrup[i].Group.id)
                    setFormHidden(true)
                    setDataGrup(dataGrup.filter(eliminat=>{
                        return eliminat.Group.id!==dataGrup[i].Group.id
                    }))
                    }}>Sterge</button></td>
                </tr>
            )
        }else{
            rows.push(
                <tr key={dataGrup[i]?.Group?.id}>
                    <th onClick={AfisareGrupPersoane}>{dataGrup[i]?.Group?.name}</th>
                    <td>{dataGrup[i]?.Group?.details}</td>
                    
                        
                </tr>
            )
        }

        
    }


    return(
        <>
        <table className="tabelgrup">
            <tbody>     
            <tr>
                <td className='title' colSpan={2}> Grupuri</td>
                
            </tr>
            <tr className='title'>
                <td>Nume grup</td>
                <td>Detalii grup</td>
            </tr>
            {rows}
            </tbody>
        </table>
        <div className={formHidden? "divformModifica":"divform"}>
                <form onSubmit={(e)=>{e.preventDefault()}} className='form'>
                    <label>Modificare grup</label>
                    <label>nume</label>
                    <input value={numeGrup} onChange={(e)=>{setNumeGrup(e.target.value)}}></input>
                    <label>Detalii</label>
                    <input value={detalii} onChange={(e)=>{setDetalii(e.target.value)}}></input>

                    <button className='GrupChangeOk' onClick={(e)=>{Actualizare()}}>ok</button>
                    <button className='GrupChangeCancel' onClick={(e)=>{setFormHidden(true)}}>cancel</button>
                    
                </form>
            </div>

        </>
    )
}
export default ShowGroups;