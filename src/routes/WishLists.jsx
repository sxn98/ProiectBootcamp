import ShowWishlists from '../hooks/ShowWishlists'
import ShowWishlistsItems from '../hooks/ShowWishlistsItems'
import ShowItems from '../hooks/ShowItems'
import '../css/Wishlists.css'
import { useNavigate } from 'react-router-dom'
import { Adauga } from '../utils/AddWishlist'
import AdaugaItem from '../utils/AddItem'
import { useState } from 'react'

const WishLists=()=>{
    const navigate=useNavigate();
    const AdaugareWishlist=()=>{
        Adauga()  
        navigate('/WishLists')
          
    }

    const[numeitem,setNumeitem]=useState("")
    const[detalii,setDetalii]=useState("")
    const[cantitate,setCantitate]=useState("")
    const[marime,setMarime]=useState("")
    const[firma,setFirma]=useState("")
    const[model,setModel]=useState("")
    const[adresa,setAdresa]=useState("")
    const[mesaj,setMesaj]=useState("")


    const mesajAdaugat=()=>{
        setMesaj(`Ati adaugat ${numeitem}!`)
    }


    return(
        <div className='wishliststotal'>
            <div className="wishlists">
                <table className="tabelwishlists">
                    
                        <tr>
                            <th>Wishlists</th>
                            <th><button onClick={AdaugareWishlist}>Wishlist nou</button></th>
                        </tr>
                        
                        <ShowWishlists/>
                        
                    </table>
                
            </div>
            
            <div className='itemewishlist'>

                <ShowWishlistsItems/>

            </div>   
            <div className='iteme'>
                <table className='tabeliteme'>
                    
                    <tr>
                        <th colSpan={2}> Iteme totale</th>
                    </tr>
                
                    <ShowItems/>
                    
                </table>
                <div className='adaugare'>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeitem(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetalii(e.target.value)}></input>
                <input type="text" placeholder='cantitate' onChange={(e)=>setCantitate(e.target.value)}></input>
                <input type="text" placeholder='marime' onChange={(e)=>setMarime(e.target.value)}></input>
                <input type="text" placeholder='firma' onChange={(e)=>setFirma(e.target.value)}></input>
                <input type="text" placeholder='model' onChange={(e)=>setModel(e.target.value)}></input>
                <input type="text" placeholder='link' onChange={(e)=>setAdresa(e.target.value)}></input>
                <button onClick={()=>{AdaugaItem(numeitem,detalii,cantitate,marime,firma,model,adresa);mesajAdaugat()}}>Adauga item nou</button>
                <label>{mesaj}</label>
                </div>

            </div>     
        </div>      
    )
}
export default WishLists;