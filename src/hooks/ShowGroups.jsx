import { useState } from 'react'
import {Afiseaza} from '../utils/AddGroup'
import { useNavigate } from 'react-router-dom'

const ShowGroups=()=>{
    const navigate=useNavigate();

    let exemplu=Afiseaza()
    const[data,setData]=useState(exemplu);
    //console.log(exemplu)
   // console.log("12334")

   const AfisareGrupPersoane=(e)=>{
    navigate(`/Groups/${e.target.innerText}`)
    console.log(e.target.innerText)
    
   }
    console.log(exemplu)
    return(

        <tbody>
        {data.map((grup)=>(
            <tr>
                <td onClick={AfisareGrupPersoane}>{grup.numegrup}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>

    )
}
export default ShowGroups;