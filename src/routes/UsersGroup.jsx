import '../css/UsersGroup.css'
import ShowUsers from '../hooks/ShowUsers';
import ShowWishlistsItemsGrupuri from '../hooks/ShowWIshlistItemsGrupuri';
import ShowWishlistGrupuri from '../hooks/ShowWishlistGrupuri';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import getMe from '../utils/getMe';
import {getGrupuriSearch} from '../utils/getGrupuri';
const UsersGroup=()=>{
    const grupCurent=useParams()
    let isOwnerOfGroup=false

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

    if(ownerGrup===userCurent){
        isOwnerOfGroup=true
        //console.log(isOwnerOfGroup)

    }
   
    return(
        <div className="usersgroup">
            
            <ShowUsers value={[idGrup,grupCurent]}/>

            <ShowWishlistGrupuri value={[idGrup,grupCurent]}/>

            <div className='divtabelwishlistgrupiteme'>
            <ShowWishlistsItemsGrupuri/>

            </div>

        </div>
    )

}
export default UsersGroup;