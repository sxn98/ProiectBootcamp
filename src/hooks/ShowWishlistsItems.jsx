import { useState } from 'react'
import exempluiteme from "../exempluiteme.json"


const ShowWishlistsItems=()=>{
    const[dataItem,setDataItem]=useState(exempluiteme);

    return(
        <table className="tabelitemewishlist">
             <tbody>
             <tr>
                 <th>Iteme</th>
                 <th><button>Item nou</button></th>
             </tr>
        {dataItem.map((iteme)=>(
            <tr>
                <td >{iteme.numeitem}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>
        </table>

    )
}
export default ShowWishlistsItems;