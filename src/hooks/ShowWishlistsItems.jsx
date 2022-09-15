import { useState,useContext,useEffect } from 'react'
import { WishlistStateContext } from '../routes/WishLists';
import getWishlistItems from '../utils/getWishlistItems';
import {getItemsSearch} from '../utils/getItems';
import AddItemToWishlist from '../utils/AddItemToWishlist';
import DeleteWishlistItem from '../utils/DeleteWishlistItem';
import '../css/Wishlists.css'

const ShowWishlistsItems=()=>{
    const[dataItem,setDataItem]=useState("");
    const[wishlistSelectat,setWishlistSelectat]=useContext(WishlistStateContext)
    const[dateWishlist,setDateWishlist]=useState("")
    const[itemsID,setItemsID]=useState("")
    const[numeItem,setNumeItem]=useState("")
    const[mesaj,setMesaj]=useState("")

    const ItemAdaugat=()=>{
        getItemsSearch(numeItem).then(itemTrimis=>{
            if(itemTrimis.length>0 ){
                //console.log(dateWishlist,itemsID,itemTrimis[0].id)
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
        
                    arrayID.push(itemeTrimise[0].items[i].id)
                }
                setItemsID(arrayID)
                
                //console.log(itemeTrimise)
                //console.log(itemeTrimise[0].id,itemeTrimise[0].details)
            })
        }
    },[wishlistSelectat,mesaj])


    let rows=[]
    if(dataItem){
        for(let i=0;i< dataItem.length;i++){       
            rows.push(
                <tr key={i}>
                    <th>{dataItem[i].name}</th>
                    
                    <td><button onClick={async (e)=>{
                    await DeleteWishlistItem(dateWishlist,itemsID,dataItem[i].id)
                    setDataItem(dataItem.filter(eliminat=>{
                        return eliminat.id!==dataItem[i].id
                    }))
                    }}>Sterge</button></td>
                </tr>
            )
        }
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
                    </tr>

                {rows}
                </tbody>
            </table>

            <div className='adaugare'>
                <label> Adaugare item nou</label>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeItem(e.target.value)}></input>
                <button onClick={()=>{ItemAdaugat()}}>Adauga item in wishlist</button>
                <label>{mesaj}</label>
            </div>

        </div> 
        )
    }
}
export default ShowWishlistsItems;