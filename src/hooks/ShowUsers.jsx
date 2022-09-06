import { useState } from 'react'
import AddGroup from '../utils/AddGroup'

const ShowUsers=()=>{

    const[data,setData]=useState("");

    return(
        
        <tbody>
        

            <tr>
                <td >persoana</td>
                <td><button>Sterge</button></td>
            </tr>

        </tbody>
    )
}
export default ShowUsers;