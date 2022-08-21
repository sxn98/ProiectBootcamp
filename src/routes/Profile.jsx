
import ShowGroups from '../hooks/ShowGroups'
import ShowWishlists from '../hooks/ShowWishlists'
import {Adauga} from '../context/AddGroup'
import { useNavigate } from 'react-router-dom'


const Profile=()=>{
    const navigate=useNavigate();
    const AdaugareGrup=()=>{
        Adauga()  
        navigate('/Groups')
          
    }


    return(
        <div className="profil">
            
            <label className="labelprofil">Salut X</label>

            <div className="profilgrup">

                <table className="tabelgrupprofil">
                
                    <tr>
                        <th> Grupuri</th>
                        <th><button onClick={AdaugareGrup}>Grup nou</button></th>
                    </tr>

                    <ShowGroups/>
                
                </table>
            </div>
            <div className="profilwishlists">
            <table className="tabelwishlistsprofil">
                    <tr>
                        <th>Wishlists</th>
                        <th><button>Wishlist nou</button></th>
                    </tr>
                    
                    <ShowWishlists/>
                </table>
            </div>
        </div>
    )

}
export default Profile;