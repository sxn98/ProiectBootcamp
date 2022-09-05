import ShowWishlists from '../hooks/ShowWishlists'
import ShowWishlistsItems from '../hooks/ShowWishlistsItems'
import ShowItems from '../hooks/ShowItems'
import '../css/Wishlists.css'
import { useNavigate } from 'react-router-dom'
import { Adauga } from '../utils/AddWishlist'


const WishLists=()=>{


    return(
        <div className='wishliststotal'>

 
            <ShowWishlists/>

            
            <div className='itemewishlist'>

                <ShowWishlistsItems/>

            </div>  

     
        </div>      
    )
}
export default WishLists;