import { useState } from 'react'
import exempluwishlist from "../exempluwishlist.json"
import ShowWishlistsItems from './ShowWishlistsItems';

const ShowWishlists=()=>{
    const[data,setData]=useState(exempluwishlist);
    //ShowWishlistsItems("3")

    const printare=(e)=>{
        console.log("se da click pe "+e.target.innerText)

    }
    return(
        <tbody>
        {data.map((wish)=>(
            <tr>
                <td onClick={printare}>{wish.numewish}</td>
                <td><button>Sterge</button></td>
            </tr>
        ))}
        </tbody>

    )
}
export default ShowWishlists;