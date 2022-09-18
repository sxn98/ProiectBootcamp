import { useState,useContext,useEffect } from 'react'
import {getItemsSearch} from '../utils/getItems';
import BuyItem from '../utils/BuyItem';
import { WishlistGrupStateContext } from '../routes/UsersGroup';
import { getGrupuriSearch } from '../utils/getGrupuri';
import getMe from '../utils/getMe';


const ShowWishlistsItemsGrupuri=(dateGrup)=>{
    //console.log(dateGrup.value[1].grup)

    const[dataItem,setDataItem]=useState("");
    const[wishlistSelectat,setWIshlistSelectat]=useContext(WishlistGrupStateContext)
    const[dateWishlist,setDateWishlist]=useState("")
    const[itemsID,setItemsID]=useState("")
    const[numeItem,setNumeItem]=useState("")
    const[mesaj,setMesaj]=useState("")

    const ItemCumparat=(NumeItemCumparat)=>{

        getMe().then(eu=>{
            
            for(let i=0;i<dataItem.length;i++){
                if(dataItem[i].name===NumeItemCumparat){
                    let arrayBuyers=dataItem[i].buyers
                    
                    BuyItem(dateWishlist.id,dataItem[i].id,eu.id,arrayBuyers).then(rezultat=>{
                        if(rezultat.errors){
                            setMesaj(`Item-ul "${NumeItemCumparat}" este deja cumparat de catre altcineva`)
                        }else{
                            setMesaj(`Ati marcat item-ul "${NumeItemCumparat}" ca si cumparat`)
                        }
                        
                    })
                }  
            } 
        })
        
        
    }


    useEffect(()=>{
        if(wishlistSelectat.length>0){
            
            getGrupuriSearch(dateGrup.value[1].grup).then(itemeTrimise=>{
                
                //console.log(itemeTrimise[0].wishlists)
                for(let i=0;i<itemeTrimise[0].wishlists.length;i++){
                    if(itemeTrimise[0].wishlists[i].name===wishlistSelectat){
                        
                        //console.log(itemeTrimise[0].wishlists[i].id)
                        setDataItem(itemeTrimise[0].wishlists[i].items)
                        
                        
                        setDateWishlist({
                            id:itemeTrimise[0].wishlists[i].id,
                            name:itemeTrimise[0].wishlists[i].name,
                            details:itemeTrimise[0].wishlists[i].details
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
    },[wishlistSelectat,mesaj])


    let rows=[]
    if(dataItem){
        //console.log(dataItem[1].item.name)
        //console.log(dataItem)
        for(let i=0;i< dataItem.length;i++){
            
           
            rows.push(
                <tr key={i}>
                    <td onClick={(e)=>{ItemCumparat(dataItem[i].name)}}>{dataItem[i].name}</td>
                    
                    <td>{dataItem[i].buyers[0]?.name}</td>
                </tr>
            )
        } 
    }
    


    return(
        <div>
            <label>Pentru a marca un item ca si cumparat, apasati pe numele lui</label>
            <table className="tabelitemewishlist">
                <tbody>

                    <tr>
                        <th colSpan={2} onClick={(e)=>{console.log(wishlistSelectat);console.log(dateWishlist)}} >Iteme</th>

                    </tr>
                    <tr>
                        <th>Nume item</th>
                        <th>Cumparator</th>
                    </tr>
                {rows}
                
                </tbody>
            </table>
            <label>{mesaj}</label>
            
        </div>

    )
}
export default ShowWishlistsItemsGrupuri;