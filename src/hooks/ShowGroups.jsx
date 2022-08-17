import { useState } from 'react'
import exemplu from '../exemplu.json'


const ShowGroups=()=>{
    const[data,setData]=useState(exemplu);

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