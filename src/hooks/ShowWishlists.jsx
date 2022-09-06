import { useState,useEffect } from 'react'
import '../css/Wishlists.css'
import ShowWishlistsItems from './ShowWishlistsItems';
import getWishlist from '../utils/getWishlist'
import AddWishlist from '../utils/AddWishlist'
import DeleteWishlist from '../utils/DeleteWishlist';

const ShowWishlists=()=>{
    const[dataWishlist,setDataWishlist]=useState("");
    const[numeWishlist,setNumeWishlist]=useState("");
    const[detaliiWishlist,setDetaliiWishlist]=useState("")
    const[mesaj,setMesaj]=useState("")
    const[adaugat,setAdaugat]=useState(0)


    const printare=(e)=>{
        console.log("se da click pe "+e.target.innerText)

    }

    useEffect(()=>{
        getWishlist().then(wishlisttrimise=>{
                setDataWishlist( wishlisttrimise)
                
        })
    },[adaugat])


    const wishlistAdaugat=async ()=>{
        await AddWishlist(numeWishlist,detaliiWishlist)
        setMesaj(`Ati creat ${numeWishlist}!`)
        setAdaugat(adaugat+1)
        
    }

    let rows=[]
    for(let i=0;i<dataWishlist.length;i++){
        
        rows.push(
            <tr key={dataWishlist[i].id}>
                <th onClick={(e)=>printare(e)}>{dataWishlist[i].name}</th>
                <td >{dataWishlist[i].details}</td>
                <td><button onClick={async (e)=>{
                    await DeleteWishlist(dataWishlist[i].id)
                    setDataWishlist(dataWishlist.filter(eliminat=>{
                        return eliminat.id!==dataWishlist[i].id
                    }))
                    }} >Sterge</button></td>
            </tr>
        )
    }


    return(
        <div className="wishlists">
        <table className="tabelwishlists">
            <tbody>
                <tr className='title'>
                    <td colSpan={2}>Wishlists</td>
                    
                </tr>

                <tr className='title'>
                   <td>Nume</td>
                   <td>Detalii</td>
                  
                </tr>
                
                {rows}

        
            </tbody>
                
            </table>
            <div className='adaugare'>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeWishlist(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetaliiWishlist(e.target.value)}></input>
                <button onClick={()=>{wishlistAdaugat()}}>Adauga wishlist nou</button>
                <label>{mesaj}</label>
            </div>  
    </div>
                 
        
    )
}
export default ShowWishlists;