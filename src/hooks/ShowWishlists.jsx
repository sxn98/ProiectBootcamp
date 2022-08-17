import { useState } from 'react'
import exempluwishlist from "../exempluwishlist.json"


const ShowWishlists=()=>{
    const[data,setData]=useState(exempluwishlist);

    return(
        <tbody>
        {data.map((wish)=>(
            <tr>
                <td contentEditable='true'>{wish.numewish}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>

    )
}
export default ShowWishlists;