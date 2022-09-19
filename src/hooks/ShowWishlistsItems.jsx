import { useState,useContext,useEffect } from 'react'
import { WishlistStateContext } from '../routes/WishLists';
import getWishlistItems from '../utils/getWishlistItems';
import {getItems, getItemsSearch} from '../utils/getItems';
import AddItemToWishlist from '../utils/AddItemToWishlist';
import DeleteWishlistItem from '../utils/DeleteWishlistItem';
import '../css/Wishlists.css'

const ShowWishlistsItems=()=>{
    const[dataItem,setDataItem]=useState("");
    const[wishlistSelectat,setWishlistSelectat]=useContext(WishlistStateContext)
    const[dateWishlist,setDateWishlist]=useState("")
    const[itemsID,setItemsID]=useState("")
    const[numeItem,setNumeItem]=useState("")
    const[inventar,setInventar]=useState("")
    const[mesaj,setMesaj]=useState("")

    const ItemAdaugat=()=>{
        getItemsSearch(numeItem).then(itemTrimis=>{
            if(itemTrimis.length>0 ){
                
                AddItemToWishlist(dateWishlist,itemsID,itemTrimis[0].id).then(rezultat=>{
                    if(rezultat==0){
                        setMesaj(`Itemul "${numeItem}" exista deja in wishlist`)
                    }else{
                        setMesaj(`Ati adaugat in wishlist itemul "${numeItem}"`)
                    }
                })
                
            }else{
                setMesaj(`Nu exista itemul cu numele "${numeItem}"`)
            }
            
        })

       
    }


    useEffect(()=>{
        if(wishlistSelectat.length>0){
            getWishlistItems(wishlistSelectat).then(itemeTrimise=>{
                setDataItem(itemeTrimise[0].items)
                
                
                setDateWishlist({
                    id:itemeTrimise[0].id,
                    name:itemeTrimise[0].name,
                    details:itemeTrimise[0].details
                })
                const arrayID=[]
                for(let i=0;i<itemeTrimise[0].items.length;i++){
        
                    arrayID.push(itemeTrimise[0].items[i].item.id)
                }
                setItemsID(arrayID)
               
            })
            getItems().then(totalIteme=>{
                setInventar(totalIteme)
            })
        }
    },[wishlistSelectat,mesaj])


    let rows=[]
    let altrow=[]
    if(dataItem){
        
        for(let i=0;i< dataItem.length;i++){       
            rows.push(
                <tr key={i}>
                    <td>{dataItem[i].item.name}</td>
                    <td>{dataItem[i].item.details}</td>
                    <td>{dataItem[i].item.model}</td>
                    <td>{dataItem[i].item.maker}</td>
                    <td>{dataItem[i].item.size}</td>
                    <td>{dataItem[i].item.link}</td>
                    <td>{dataItem[i].item.quantity}</td>
                    
                    <td><button onClick={async (e)=>{
                    await DeleteWishlistItem(dateWishlist,itemsID,dataItem[i].item.id)
                    setDataItem(dataItem.filter(eliminat=>{
                       
                        return eliminat.item.id!==dataItem[i].item.id
                    }))
                    }}>Elimina</button></td>
                </tr>
            )
            
        }
    }
    for(let j=0;j<inventar.length;j++){
        altrow.push(
            <option key={j}>{inventar[j].name}</option>
        )
    }
    
   
    if(wishlistSelectat==0){
       return(
        <div></div>
       )
    }else{
    return(
        <div className='itemewishlist'>
            <label>Itemele din {wishlistSelectat}</label>

            <table className="tabelitemewishlist">
                <tbody>

                    <tr>
                        <th>Nume item</th>
                        <th>Detalii</th>
                        <th>Firma</th>
                        <th>Model</th>
                        <th>Marime</th>
                        <th>Link</th>
                        <th>Cantitate</th>
                    </tr>

                {rows}
                </tbody>
            </table>

            <div className='adaugare'>
                <label> Adaugare item nou din inventar</label>
               
                <input list="elemente" placeholder='selectati item' onChange={(e)=>setNumeItem(e.target.value)}></input>
                    <datalist id="elemente">
                        {altrow}
                    </datalist>
                <button onClick={()=>{ItemAdaugat()}}>Adauga item in wishlist</button>
                <label>{mesaj}</label>
            </div>
        
        </div> 
        )
    }
}
export default ShowWishlistsItems;