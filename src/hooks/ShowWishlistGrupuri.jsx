import { useState,useEffect } from "react";
import WishLists from "../routes/WishLists";
import {getGrupuriSearch} from "../utils/getGrupuri";

const ShowWishlistsGrupuri=(dateGrup)=>{
    const [dataWishlist,setDataWishlist]=useState("")
    
    useEffect(()=>{
        getGrupuriSearch(dateGrup.value[1].grup).then(wishlists=>{
                console.log(wishlists)
                setDataWishlist(wishlists)
                
        })
    
        },[])

    let rows=[]
    //console.log(dataWishlist)
    for(let i=0;i<dataWishlist.length;i++){
           
        rows.push(
            <tr key={dataWishlist[i].id}>
                <td>{dataWishlist[i].name}</td>
                <td>{dataWishlist[i].details}</td>

            </tr>
        )
    }

    return(
        <div className='divtabelwishlistgrup'>
                
                <table className='tabelwishlistgrup'>
                    <tbody>
                        <tr>
                            <th colSpan={2}> Wishlist</th>
                        </tr>
                        <tr>
                            <th> Nume</th>
                            <th> Detalii</th>
                        </tr>
                        {rows}
                    </tbody>
                </table>
                <div className="adaugare">
                    <label>Adaugare wishlist nou</label>
                    <input type="text" placeholder="adauga wishlist" ></input>
                    <button>Adauga</button>
                </div>
            </div>
    )
}
export default ShowWishlistsGrupuri;