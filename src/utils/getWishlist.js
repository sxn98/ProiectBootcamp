import axios from "axios";

async function getWishlist(){
    const rezultat= await axios.get('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists',{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })


   return rezultat.data.wishlists
   
}export default getWishlist;