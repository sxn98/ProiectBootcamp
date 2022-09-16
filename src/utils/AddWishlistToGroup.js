import axios from "axios";

export async function AddWishlistToGroup(grupID,idwishlists,idWishlistAdaugat){
    if(idwishlists.indexOf(idWishlistAdaugat)!==-1){
        return 0
    }

    //console.log(grupID,idwishlists,idWishlistAdaugat)

    const dateTrimise={
        wishlistIds:[idWishlistAdaugat]
    }

    const rezultat= await axios.post(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${grupID}/wishlists`,dateTrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    //console.log(rezultat)
    return rezultat.data 
    
}

export default AddWishlistToGroup;