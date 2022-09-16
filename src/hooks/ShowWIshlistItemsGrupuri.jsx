import { useState,useContext,useEffect } from 'react'
import getWishlistItems from '../utils/getWishlistItems';
import {getItemsSearch} from '../utils/getItems';
import BuyItem from '../utils/BuyItem';
import { WishlistGrupStateContext } from '../routes/UsersGroup';


const ShowWishlistsItemsGrupuri=()=>{
    const[dataItem,setDataItem]=useState("");
   // const[wishlistSelectat,setWishlistSelectat]=useContext(WishlistStateContext)
   const[wishlistSelectat,setWIshlistSelectat]=useContext(WishlistGrupStateContext)
    const[dateWishlist,setDateWishlist]=useState("")
    const[itemsID,setItemsID]=useState("")
    const[numeItem,setNumeItem]=useState("")
    const[mesaj,setMesaj]=useState("")

    const ItemCumparat=()=>{
       
        getItemsSearch(numeItem).then(itemTrimis=>{
            if(itemTrimis.length>0 ){
                //console.log(dateWishlist,itemsID,itemTrimis[0].id)
                BuyItem(dateWishlist,itemsID,itemTrimis[0].id).then(rezultat=>{
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
                
                //console.log(itemeTrimise[0].items)
                //console.log(itemeTrimise[0].id,itemeTrimise[0].details)
            })
        }
    },[wishlistSelectat])


    let rows=[]
    if(dataItem){
        //console.log(dataItem[1].item.name)

        for(let i=0;i< dataItem.length;i++){
            
           
            rows.push(
                <tr key={i}>
                    <th>{dataItem[i].item.name}</th>
                    
                    <td><button>Sterge</button></td>
                </tr>
            )
        }
        rows.push(
            
        )
    }
    
   

    return(
        <div>
            <table className="tabelitemewishlist">
                <tbody>

                    <tr>
                        <th colSpan={2} onClick={(e)=>{console.log(wishlistSelectat)}} >Iteme</th>

                    </tr>

                {rows}
                </tbody>
            </table>

        </div>

    )
}
export default ShowWishlistsItemsGrupuri;