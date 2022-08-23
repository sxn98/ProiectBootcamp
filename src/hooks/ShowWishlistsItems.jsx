import { useState } from 'react'
import exempluiteme from "../exempluiteme.json"


const ShowWishlistsItems=()=>{
    const[dataItem,setDataItem]=useState(exempluiteme);

    return(
        <tbody>
             <table className="tabelitemewishlist">
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
        </table>
        </tbody>

    )
}
export default ShowWishlistsItems;