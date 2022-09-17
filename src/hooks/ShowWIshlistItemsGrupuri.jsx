import { useState,useContext,useEffect } from 'react'
import {getItemsSearch} from '../utils/getItems';
import BuyItem from '../utils/BuyItem';
import { WishlistGrupStateContext } from '../routes/UsersGroup';
import { getGrupuriSearch } from '../utils/getGrupuri';


const ShowWishlistsItemsGrupuri=(dateGrup)=>{
    //console.log(dateGrup.value[1].grup)

    const[dataItem,setDataItem]=useState("");
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
            
            getGrupuriSearch(dateGrup.value[1].grup).then(itemeTrimise=>{
                //console.log(itemeTrimise[0].wishlists)
                for(let i=0;i<itemeTrimise[0].wishlists.length;i++){
                    if(itemeTrimise[0].wishlists[i].name===wishlistSelectat){
                        //console.log(itemeTrimise[0].wishlists[i])
                        //console.log(itemeTrimise[0].wishlists[i].items)
                        setDataItem(itemeTrimise[0].wishlists[i].items)
                
                        setDateWishlist({
                            id:itemeTrimise[0].wishlists[i].items.id,
                            name:itemeTrimise[0].wishlists[i].items.name,
                            details:itemeTrimise[0].wishlists[i].items.details
                        })
                        const arrayID=[]
                        for(let j=0;j<itemeTrimise[0].wishlists[i].items.length;j++){
                
                            arrayID.push(itemeTrimise[0].wishlists[i].items[j].id)
                        }
                        setItemsID(arrayID)
                    }else{

                    }

                }
            })
        }
    },[wishlistSelectat])


    let rows=[]
    if(dataItem){
        //console.log(dataItem[1].item.name)

        for(let i=0;i< dataItem.length;i++){
            
           
            rows.push(
                <tr key={i}>
                    <td>{dataItem[i].name}</td>
                    
                    <td></td>
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
                    <tr>
                        <th>Nume item</th>
                        <th>Cumparator/i</th>
                    </tr>
                {rows}
                
                </tbody>
            </table>
            <label>Pentru a marca un item ca si cumparat, apasati pe numele lui</label>
        </div>

    )
}
export default ShowWishlistsItemsGrupuri;