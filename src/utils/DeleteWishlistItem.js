import axios from "axios";

async function DeleteWishlistItem(dateWishlist,itemsID,IdItemTrimis){
    console.log(itemsID)
    console.log(IdItemTrimis)
    const index=itemsID.indexOf(IdItemTrimis)
    itemsID.splice(index,1)
    let datetrimise={
        wishlist:{
            name:dateWishlist.name,
            details:dateWishlist.details
        },
        itemIds:itemsID

    }

    console.log(datetrimise)
    const rezultat= await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${dateWishlist.id}`,datetrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
      
 
    }).catch(err=>{
        console.log(err.message)
       
        
    })
}
export default DeleteWishlistItem;