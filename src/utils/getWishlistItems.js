import axios from "axios";

async function getWishlistItems(numeWishlist){
    const rezultat= await axios.get(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists?search=${numeWishlist}&limit=1`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })


   return rezultat.data.wishlists
   
}export default getWishlistItems;