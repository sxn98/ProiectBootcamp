import ShowWishlists from '../hooks/ShowWishlists'
import '../css/Wishlists.css'

const WishLists=()=>{
    return(

        <div className="wishlists">
            <table className="tabelwishlists">
                    <tr>
                        <th>Wishlists</th>
                        <th><button>Wishlist nou</button></th>
                    </tr>
                    
                    <ShowWishlists/>
                </table>
            
            </div>

        
    )

}
export default WishLists;