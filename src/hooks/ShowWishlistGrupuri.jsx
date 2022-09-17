import { useState,useEffect } from "react";
import {getGrupuriSearch} from "../utils/getGrupuri";
import AddWishlistToGroup from "../utils/AddWishlistToGroup";
import getWishlistSearch from "../utils/getWishlistSearch";

const ShowWishlistsGrupuri=(dateGrup,{handleClick})=>{
    let inputAdaugare=[]
    let rows=[]


    const[isOwner,setIsOwner]=useState(dateGrup.value[2])
    const [dataWishlist,setDataWishlist]=useState("")
    const [wishlistAdaugat,setWishlistAdaugat]=useState("")
    const[wishlistID,setWishlistID]=useState("")
    const[mesaj,setMesaj]=useState("")
    useEffect(()=>{
        getGrupuriSearch(dateGrup.value[1].grup).then(wishlists=>{
           // console.log(wishlists[0].wishlists)
            setDataWishlist(wishlists[0].wishlists)


            let arrayIDWishlists=[]
            for(let i=0;i<wishlists[0].wishlists.length;i++){
        
                arrayIDWishlists.push(wishlists[0].wishlists[i].id)
            }
            setWishlistID(arrayIDWishlists)
            //console.log(arrayIDWishlists)
        })

        
    },[mesaj,isOwner])


    const Stergere=(e)=>{

    }
    const Adaugare=(e)=>{
        getWishlistSearch(wishlistAdaugat).then(wishlistTrimis=>{
            //console.log(wishlistTrimis[0].id)

            if(wishlistTrimis.length>0 ){
                //console.log(dateWishlist,itemsID,itemTrimis[0].id)
                AddWishlistToGroup(dateGrup.value[0],wishlistID,wishlistTrimis[0].id).then(rezultat=>{
                    if(rezultat==0){
                        setMesaj(`Wishlist-ul "${wishlistAdaugat}" exista deja`)
                    }else{
                        setMesaj(`Ati dat share la wishlist-ul "${wishlistAdaugat}"`)
                    }
                })
                
            }else{
                setMesaj(`Nu exista wishlist-ul cu numele "${wishlistAdaugat}"`)
            }
        })

    }    
    const SelectareWishlist= (e)=>{
        //console.log(dateGrup.handleClick)
        dateGrup.handleClick(e.target.innerText)
    }



    //console.log(dataWishlist)

    //console.log(isOwner)
    //console.log(dateGrup.value[2])
    if(dateGrup.value[2]===true){
        
        console.log('aaaaaaaaaaaaaaaaaaa')
        //console.log(isOwner)
        inputAdaugare.push(
                <div className="adaugare">
                    <label>Adaugare wishlist nou</label>
                    <input type="text" placeholder="adauga wishlist" onChange={(e)=>{setWishlistAdaugat(e.target.value)}} ></input>
                    <button onClick={(e)=>{Adaugare(e)}}>Adauga</button>
                    <label>{mesaj}</label>
                </div>
        )
        for(let i=0;i<dataWishlist.length;i++){
           
            rows.push(
                <tr key={dataWishlist[i].id}>
                    <td onClick={(e)=>SelectareWishlist(e)}>{dataWishlist[i].name}</td>
                    <td>{dataWishlist[i].details}</td>
                    <td><button onClick={(e)=>{Stergere()}}>Sterge</button></td>
                </tr>
            )
        }
    }else{
        for(let i=0;i<dataWishlist.length;i++){
           
            rows.push(
                <tr key={dataWishlist[i].id}>
                    <td onClick={(e)=>SelectareWishlist(e)}>{dataWishlist[i].name}</td>
                    <td>{dataWishlist[i].details}</td>

                </tr>
            )
        }
    }
    

    return(
        <div className='divtabelwishlistgrup'>
                
                <table className='tabelwishlistgrup'>
                    <tbody>
                        <tr>
                            <th colSpan={2}> Wishlist</th>
                        </tr>
                        <tr>
                            <th onClick={(e)=>{console.log(dateGrup.value[2])}}> Nume</th>
                            <th> Detalii</th>
                        </tr>
                        {rows}
                    </tbody>
                </table>
                {inputAdaugare}
            </div>
    )
}
export default ShowWishlistsGrupuri;