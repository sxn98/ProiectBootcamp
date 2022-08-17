
import ShowGroups from '../hooks/ShowGroups'
import ShowWishlists from '../hooks/ShowWishlists'
const Profile=()=>{
    //const[data,setData]=useState(exemplu);


    
    const testare=(e)=>{
        console.log(e.target.innerText)
    }
    return(
        <div className="profil">
            <label className="labelprofil">Salut X</label>

            <div className="profilgrup">

                <table className="tabelgrupprofil">
                
                    <tr>
                        <th> Grupuri</th>
                        <th><button>Grup nou</button></th>
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