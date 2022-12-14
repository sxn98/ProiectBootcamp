import axios from "axios";


async function AddItemToWishlist(dateWishlist,itemsID,IdItemTrimis){
    
    if(itemsID.indexOf(IdItemTrimis)!==-1){
        return 0
    }

    itemsID.push(IdItemTrimis)

    let datetrimise={
        wishlist:{
            name:dateWishlist.name,
            details:dateWishlist.details
        },
        itemIds:itemsID

    }

    
    const rezultat= await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${dateWishlist.id}`,datetrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    
   return rezultat.data
}
export default AddItemToWishlist;