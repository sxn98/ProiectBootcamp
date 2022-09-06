import { useState } from 'react'



const ShowWishlistsItems=()=>{
    const[dataItem,setDataItem]=useState("");

    return(
        <table className="tabelitemewishlist">
             <tbody>
             <tr>
                 <th>Iteme</th>
                 <th><button>Item nou</button></th>
             </tr>
       
            <tr>
                <td ></td>
                <td><button>Sterge</button></td>
            </tr>
        
        </tbody>
        </table>

    )
}
export default ShowWishlistsItems;