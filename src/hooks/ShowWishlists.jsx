import { useState } from 'react'
import '../css/Wishlists.css'
import ShowWishlistsItems from './ShowWishlistsItems';
import getWishlist from '../utils/getWishlist'
import AddWishlist from '../utils/AddWishlist'

const ShowWishlists=()=>{
    const[dataWishlist,setDataWishlist]=useState("");
    const[numeWishlist,setNumeWishlist]=useState("");
    const[detaliiWishlist,setDetaliiWishlist]=useState("")
    const[mesaj,setMesaj]=useState("")

    const printare=(e)=>{
        console.log("se da click pe "+e.target.innerText)

    }


    getWishlist().then(async wishlisttrimise=>{
        
        if(!dataWishlist){
            setDataWishlist(await wishlisttrimise)
            
        }
        //console.log(dataWishlist.shownResults[0].items)
        //console.log(dataWishlist)
    })

    const wishlistAdaugat=async ()=>{
        await AddWishlist(numeWishlist,detaliiWishlist)
        setMesaj(`Ati creat ${numeWishlist}!`)
        window.location.reload(false)
        
    }
    //console.log(dataWishlist.shownResults[0].name)
    let rows=[]
    for(let i=0;i<dataWishlist.length;i++){
        console.log(dataWishlist)
        rows.push(
            <tr key={dataWishlist[i].id}>
                <td>{dataWishlist[i].name}</td>
                <td>{dataWishlist[i].details}</td>
                <td><button >Sterge</button></td>
            </tr>
        )
    }


    return(
        <div className="wishlists">
        <table className="tabelwishlists">
            <tbody>
                <tr>
                    <th colSpan={2}>Wishlists</th>
                    
                </tr>

                <tr>
                   <td>Nume</td>
                   <td>Detalii</td>
                  
                </tr>
                {rows}

           
        
                <tr>
                    <td onClick={printare}></td>
                    <td></td>
                    <td><button>Sterge</button></td>
                </tr>
            </tbody>
                
            </table>
            <div className='adaugare'>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeWishlist(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetaliiWishlist(e.target.value)}></input>
                <button onClick={()=>{wishlistAdaugat()}}>Adauga item nou</button>
                <label>{mesaj}</label>
            </div>  
    </div>
                 
        
    )
}
export default ShowWishlists;