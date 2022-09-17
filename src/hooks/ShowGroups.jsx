import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteGroup from '../utils/DeleteGroup'
import { StateContextGrup } from '../routes/Groups'
import getSharedGroups from '../utils/getSharedGroups'
const ShowGroups=()=>{
    const navigate=useNavigate();

    const[dataGrup,setDataGrup]=useState("");
    const[schimbat,setSchimbat]=useContext(StateContextGrup)

   const AfisareGrupPersoane=(e)=>{
    navigate(`/Groups/${e.target.innerText}`)
    //console.log(e.target.innerText)
    
   }

   useEffect(()=>{
    getSharedGroups().then(rezultat=>{
        setDataGrup(rezultat)
        //console.log(rezultat[2])
        //console.log(rezultat[0].Group.name)
    })

    },[schimbat])

    let rows=[]
    for(let i=0;i<dataGrup.length;i++){
        
        rows.push(
            <tr key={dataGrup[i]?.Group?.id}>
                <td onClick={AfisareGrupPersoane}>{dataGrup[i]?.Group?.name}</td>
                <td>{dataGrup[i]?.Group?.details}</td>
                <td><button onClick={async (e)=>{
                    await DeleteGroup(dataGrup[i]?.Group?.id)
                    setDataGrup(dataGrup.filter(eliminat=>{
                        return eliminat?.Group?.id!==dataGrup[i]?.Group?.id
                    }))
                    }}>Sterge</button></td>
            </tr>
        )
    }


    return(
        <table className="tabelgrup">
            <tbody>     
            <tr>
                <th colSpan={2}> Grupuri</th>
                
            </tr>
            <tr>
                <td>Nume grup</td>
                <td>Detalii grup</td>
            </tr>
            {rows}
            </tbody>
        </table>

    )
}
export default ShowGroups;