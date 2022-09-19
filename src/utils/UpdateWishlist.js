import axios from "axios";

 async function UpdateWishlist(nume,detalii,idIteme,id){
    let body={
        wishlist:{
            name:nume,
            details:detalii
        },
        itemIds:idIteme
        
    }
    console.log(body)
    await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${id}`,body,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
        console.log(response)
 
    }).catch(err=>{
        console.log(err.message)
        
        
    })

}
export default UpdateWishlist;