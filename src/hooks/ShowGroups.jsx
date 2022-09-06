import { useState,useEffect,useContext } from 'react'
import getGrupuri from '../utils/getGrupuri'
import { useNavigate } from 'react-router-dom'
import DeleteGroup from '../utils/DeleteGroup'
import { StateContextGrup } from '../routes/Groups'
const ShowGroups=()=>{
    const navigate=useNavigate();

    const[dataGrup,setDataGrup]=useState("");
    const[schimbat,setSchimbat]=useContext(StateContextGrup)

   const AfisareGrupPersoane=(e)=>{
    navigate(`/Groups/${e.target.innerText}`)
    console.log(e.target.innerText)
    
   }

   useEffect(()=>{
    getGrupuri().then(grupuritrimise=>{
            setDataGrup( grupuritrimise)
            
    })

    },[schimbat])

    let rows=[]
    for(let i=0;i<dataGrup.length;i++){
        rows.push(
            <tr key={dataGrup[i].id}>
                <td onClick={AfisareGrupPersoane}>{dataGrup[i].name}</td>
                <td>{dataGrup[i].details}</td>
                <td><button onClick={async (e)=>{
                    await DeleteGroup(dataGrup[i].id)
                    setDataGrup(dataGrup.filter(eliminat=>{
                        return eliminat.id!==dataGrup[i].id
                    }))
                    }}>Sterge</button></td>
            </tr>
        )
    }


    return(
        <table className="tabelgrup">
                    
            <tr>
                <th colSpan={2}> Grupuri</th>
                
            </tr>
            <tbody>
            {rows}
            </tbody>
        </table>

    )
}
export default ShowGroups;