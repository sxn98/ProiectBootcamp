import ShowWishlists from '../hooks/ShowWishlists'
import ShowWishlistsItems from '../hooks/ShowWishlistsItems'
import '../css/Wishlists.css'
import { useNavigate } from 'react-router-dom'
import { Adauga } from '../context/AddWishlist'

const WishLists=()=>{
    const navigate=useNavigate();
    const AdaugareWishlist=()=>{
        Adauga()  
        navigate('/WishLists')
          
    }

    return(
        <div className='wishliststotal'>
            <div className="wishlists">
                <table className="tabelwishlists">
                        <tr>
                            <th>Wishlists</th>
                            <th><button onClick={AdaugareWishlist}>Wishlist nou</button></th>
                        </tr>
                        
                        <ShowWishlists/>
                    </table>
                
            </div>
            
            <div className='iteme'>

                <ShowWishlistsItems/>

            </div>        
        </div>      
    )
}
export default WishLists;