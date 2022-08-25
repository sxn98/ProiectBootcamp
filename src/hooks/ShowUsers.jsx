import { useState } from 'react'
import {Afiseaza} from '../context/AddGroup'

const ShowUsers=()=>{
    let exemplu=Afiseaza()
    const[data,setData]=useState(exemplu);

    return(
        
        <tbody>
        {data.map((grup)=>(
            <tr>
                <td >{grup.numegrup}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>
    )
}
export default ShowUsers;