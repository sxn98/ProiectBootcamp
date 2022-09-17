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
    

    let[wishlistSelectat,setWishlistSelectat]=useState("")
    const[ownerGrup,setOwnerGrup]=useState("")
    const[isOwnerOfGroup,setIsOwnerOfGroup]=useState(false)
    const[userCurent,setUserCurent]=useState("")    
    const[idGrup,setIdGrup]=useState("")
    
    useEffect(()=>{
        getMe().then(eu=>{
            setUserCurent(eu.id) 
            //console.log('eu sunt '+eu.id)
            getGrupuriSearch(grupCurent.grup).then(owner=>{
                setOwnerGrup(owner[0].Group.ownerId) 
                setIdGrup(owner[0].groupId)
                //console.log('ownerul e '+owner[0].Group.ownerId)
    
                if(owner[0].Group.ownerId===eu.id){
                    setIsOwnerOfGroup(true)
                    //console.log(isOwnerOfGroup)
             
                }
                
            })
        })   
        
    },[])
    
    const handleClick=(wishlistClicked)=>{
        setWishlistSelectat(wishlistClicked)
        
    }


    //console.log(handleClick)
    //console.log(ownerGrup,userCurent)


    return(
        <WishlistGrupStateContext.Provider value={[wishlistSelectat]}>
            <div className="usersgroup">
                
                <ShowUsers value={[idGrup,grupCurent,ownerGrup,isOwnerOfGroup]}/>

                <ShowWishlistGrupuri value={[idGrup,grupCurent,isOwnerOfGroup]} handleClick={handleClick}/>

                <div className='divtabelwishlistgrupiteme'>
                <ShowWishlistsItemsGrupuri value={[idGrup,grupCurent]}/>

                </div>

            </div>
        </WishlistGrupStateContext.Provider>
    )

}
export default UsersGroup;