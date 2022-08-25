import '../css/UsersGroup.css'
import ShowUsers from '../hooks/ShowUsers';
import ShowWishlists from '../hooks/ShowWishlists';
import ShowWishlistsItems from '../hooks/ShowWishlistsItems';
import { useNavigate } from 'react-router-dom';
import { Adauga } from '../context/AddUser';
const UsersGroup=()=>{


    const navigate=useNavigate();
    const AdaugareUser=()=>{
        Adauga()  
        navigate('/Groups/...')
    }
    return(
        <div className="usersgroup">
            <div className='divusergroup'>
                <input type="text" placeholder="adauga persoana" ></input>
                <button onClick={AdaugareUser}>Adauga</button>
                <table className="tabelusersgrup">
                    
                    <tr>
                        <th> Participanti</th>
                        
                    </tr>
                <ShowUsers/>
                    
                
                </table>
            </div>

            <div className='divtabelwishlistgrup'>
                <input type="text" placeholder="adauga wishlist" ></input>
                <button>Adauga</button>
                <table className='tabelwishlistgrup'>
                    <tr>
                        <th> Wishlist</th>
                    </tr>
                <ShowWishlists/>
                </table>
            </div>

            <div className='divtabelwishlistgrupiteme'>
            <ShowWishlistsItems/>

            </div>
        </div>
    )

}
export default UsersGroup;