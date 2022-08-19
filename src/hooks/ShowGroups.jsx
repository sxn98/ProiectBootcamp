import { useState } from 'react'
import {Afiseaza} from '../context/AddGroup'


const ShowGroups=()=>{
    let exemplu=Afiseaza()
    const[data,setData]=useState(exemplu);
    console.log(exemplu)
    console.log("12334")

    
    return(
        
        <tbody>
        {data.map((grup)=>(
            <tr>
                <td>{grup.numegrup}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>

    )
}
export default ShowGroups;