import { useState,useEffect } from 'react'
import '../css/Wishlists.css'
import getWishlist from '../utils/getWishlist'
import AddWishlist from '../utils/AddWishlist'
import DeleteWishlist from '../utils/DeleteWishlist';
import { useNavigate } from 'react-router-dom';
import UpdateWishlist from '../utils/UpdateWishlist';
import getWishlistSearch from '../utils/getWishlistSearch';



const ShowWishlists=({handleClick})=>{
    const navigate=useNavigate()

    const[dataWishlist,setDataWishlist]=useState("");
    const[numeWishlist,setNumeWishlist]=useState("");
    const[detaliiWishlist,setDetaliiWishlist]=useState("")
    const[mesaj,setMesaj]=useState("")
    const[adaugat,setAdaugat]=useState(0)
    const[numeWishlistModificat,setNumeWishlistModificat]=useState("")
    const[detaliiWishlistModificat,setDetaliiWishlistModificat]=useState("")
    const[idWishlistSchimbat,setIdWishlistSchimbat]=useState("")
    const[idItemeWishlistSchimbat,setIdItemeWishlistSchimbat]=useState([])
    const[formHidden,setFormHidden]=useState(true)
    const printare= (e)=>{
      
        
        handleClick(e.target.innerText)
    }

    const SetareDate=(propWishlist)=>{
        let idArr=[]
        setNumeWishlistModificat(propWishlist.name)
        setDetaliiWishlistModificat(propWishlist.details)
        setIdWishlistSchimbat(propWishlist.id)
        getWishlistSearch(propWishlist.name).then(wishlistTrimisIar=>{
            console.log(wishlistTrimisIar)
            for(let j=0;j<wishlistTrimisIar[0].items.length;j++){
                idArr.push(wishlistTrimisIar[0].items[j].item.id)
    
            }
        })

       
        setIdItemeWishlistSchimbat(idArr)
        console.log(idItemeWishlistSchimbat)
    }

    useEffect(()=>{
        getWishlist().then(wishlisttrimise=>{
                setDataWishlist( wishlisttrimise)
                
        })
       
        if(!localStorage.getItem('user-info')){
            console.log('')
            navigate('/')
        }
    },[mesaj])


    const wishlistAdaugat=async ()=>{
        await AddWishlist(numeWishlist,detaliiWishlist)
        setMesaj(`Ati creat ${numeWishlist}!`)

    }
    const Actualizare=async ()=>{
        console.log(idItemeWishlistSchimbat)
        await UpdateWishlist(numeWishlistModificat,detaliiWishlistModificat,idItemeWishlistSchimbat,idWishlistSchimbat)
        setFormHidden(true)
        setMesaj(`Wishlist modificat!`)
        
    }


    let rows=[]
    for(let i=0;i<dataWishlist.length;i++){
        
        rows.push(
            <tr key={dataWishlist[i].id}>
                <th onClick={(e)=>printare(e)}>{dataWishlist[i].name}</th>
                <td >{dataWishlist[i].details}</td>
                <td><button onClick={(e)=>{SetareDate(dataWishlist[i]);setFormHidden(false)}}>Modifica</button></td>
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
                <label> Pentru a viziona itemele unui wishlist, faceti click pe numele unui wishlist</label>
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
                        <label>Adaugare wishlist nou</label>
                        <input type="text" placeholder='Nume wishlist' onChange={(e)=>setNumeWishlist(e.target.value)}></input>
                        <input type="text" placeholder='Detalii' onChange={(e)=>setDetaliiWishlist(e.target.value)}></input>
                        <button onClick={()=>{wishlistAdaugat()}}>Adauga wishlist nou</button>
                        <label>{mesaj}</label>
                    </div> 

                <div className={formHidden? "divformModifica":"divform"}>
                    <form onSubmit={(e)=>{e.preventDefault()}} className='form'>
                        <label>Modificare wishlist</label>
                        <label>nume</label>
                        <input value={numeWishlistModificat} onChange={(e)=>{setNumeWishlistModificat(e.target.value)}}></input>
                        <label>Detalii</label>
                        <input value={detaliiWishlistModificat} onChange={(e)=>{setDetaliiWishlistModificat(e.target.value)}}></input>

                        <button className='WishlistChangeOk' onClick={(e)=>{Actualizare()}}>ok</button>
                        <button className='WishlistChangeCancel' onClick={(e)=>{setFormHidden(true);setMesaj("")}}>cancel</button>
                        
                    </form>
                </div>  

            </div>
                 
        
    )
}
export default ShowWishlists;