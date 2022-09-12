import ShowWishlists from '../hooks/ShowWishlists'
import ShowWishlistsItems from '../hooks/ShowWishlistsItems'
import '../css/Wishlists.css'
import { createContext,useState,useContext } from 'react'



export const WishlistStateContext=createContext();

const WishLists=()=>{
    
    let[wishlistSelectat,setWishlistSelectat]=useState("")
    const handleClick=(wishlistClicked)=>{
        setWishlistSelectat(wishlistClicked)

    }

    return(
        <WishlistStateContext.Provider value={[wishlistSelectat]}>
            <div className='wishliststotal'>

    
                <ShowWishlists handleClick={handleClick}/>

                
                <div className='itemewishlist'>

                    <ShowWishlistsItems/>

                </div>  

        
            </div>
        </WishlistStateContext.Provider>      
    )
}
export default WishLists;