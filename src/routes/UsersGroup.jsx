import '../css/UsersGroup.css'
import ShowUsers from '../hooks/ShowUsers';
import ShowWishlistsItemsGrupuri from '../hooks/ShowWIshlistItemsGrupuri';
import ShowWishlistGrupuri from '../hooks/ShowWishlistGrupuri';
import { useParams } from 'react-router-dom';
import { useEffect,useState,createContext } from 'react';
import getMe from '../utils/getMe';
import {getGrupuriSearch} from '../utils/getGrupuri';

export const WishlistGrupStateContext=createContext();

const UsersGroup=()=>{
    const grupCurent=useParams()
    let isOwnerOfGroup=false

    let[wishlistSelectat,setWishlistSelectat]=useState("")
    const[ownerGrup,setOwnerGrup]=useState("")
    const[userCurent,setUserCurent]=useState("")    
    const[idGrup,setIdGrup]=useState("")

    useEffect(()=>{
        getMe().then(eu=>{
            setUserCurent(eu.id) 


        })
        getGrupuriSearch(grupCurent.grup).then(owner=>{
            setOwnerGrup(owner[0]?.ownerId) 
            setIdGrup(owner[0]?.id)
        })

    },[])
    
    const handleClick=(wishlistClicked)=>{
        setWishlistSelectat(wishlistClicked)
        
    }
    //console.log(handleClick)
    if(ownerGrup===userCurent){
        isOwnerOfGroup=true
        //console.log(isOwnerOfGroup)

    }
   
    return(
        <WishlistGrupStateContext.Provider value={[wishlistSelectat]}>
            <div className="usersgroup">
                
                <ShowUsers value={[idGrup,grupCurent]}/>

                <ShowWishlistGrupuri value={[idGrup,grupCurent]} handleClick={handleClick}/>

                <div className='divtabelwishlistgrupiteme'>
                <ShowWishlistsItemsGrupuri />

                </div>

            </div>
        </WishlistGrupStateContext.Provider>
    )

}
export default UsersGroup;