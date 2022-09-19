import { useState,useEffect } from "react";
import {getGrupuriSearch} from "../utils/getGrupuri";
import AddWishlistToGroup from "../utils/AddWishlistToGroup";
import getWishlistSearch from "../utils/getWishlistSearch";
import getWishlist from "../utils/getWishlist";

const ShowWishlistsGrupuri=(dateGrup,{handleClick})=>{
    let inputAdaugare=[]
    let rows=[]
    let rowAdaugare=[]

    const[isOwner,setIsOwner]=useState(dateGrup.value[2])
    const[dataWishlist,setDataWishlist]=useState("")
    const[wishlistAdaugat,setWishlistAdaugat]=useState("")
    const[wishlistID,setWishlistID]=useState("")
    const[myWishlists,setMyWishlists]=useState("")
    const[mesaj,setMesaj]=useState("")
    useEffect(()=>{
        getGrupuriSearch(dateGrup.value[1].grup).then(wishlists=>{
       
            setDataWishlist(wishlists[0].wishlists)


            let arrayIDWishlists=[]
            for(let i=0;i<wishlists[0].wishlists.length;i++){
        
                arrayIDWishlists.push(wishlists[0].wishlists[i].id)
            }
            setWishlistID(arrayIDWishlists)
     
        getWishlist().then(myReturnedWishlists=>{
            setMyWishlists(myReturnedWishlists)
        })
        })

        
    },[mesaj,isOwner])


    const Stergere=(e)=>{

    }
    const Adaugare=(e)=>{
        getWishlistSearch(wishlistAdaugat).then(wishlistTrimis=>{


            if(wishlistTrimis.length>0 ){

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

        dateGrup.handleClick(e.target.innerText)
    }



    if(dateGrup.value[2]===true){

        

        inputAdaugare.push(
                <div key='inputAdaugareWishlist' className="adaugare">
                    <label>Adaugare wishlist nou</label>
                    <input list="elementeWishlist" placeholder='selectati wishlist' onChange={(e)=>setWishlistAdaugat(e.target.value)}></input>
                    <datalist id="elementeWishlist">
                        {rowAdaugare}
                    </datalist>
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
                    <th onClick={(e)=>SelectareWishlist(e)}>{dataWishlist[i].name}</th>
                    <td>{dataWishlist[i].details}</td>

                </tr>
            )
        }
    }
    for(let j=0;j<myWishlists.length;j++){
        rowAdaugare.push(
            <option id={myWishlists[j].id}>{myWishlists[j].name}</option>
        )
    }

    return(
        <div className='divtabelwishlistgrup'>
                <label>Pentru a viziona itemele dintr-un wishlist, faceti click pe numele acestuia</label>
                <table className='tabelwishlistgrup'>
                    <tbody>
                        <tr className="title">
                            <td colSpan={2}> Wishlist</td>
                        </tr>
                        <tr className="title">
                            <td onClick={(e)=>{console.log(dateGrup.value[2])}}> Nume</td>
                            <td> Detalii</td>
                        </tr>
                        {rows}
                    </tbody>
                </table>
                {inputAdaugare}
            </div>
    )
}
export default ShowWishlistsGrupuri;