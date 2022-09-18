import axios from "axios";


async function BuyItem(idWishlist,idItem,idBuyer,arrayBuyers){
    if(arrayBuyers.indexOf(idBuyer)!==-1){
        return 0
    }


    arrayBuyers.push(idBuyer)

    let dateTrimise={
        "buyersIds":[
            idBuyer
        ]
    }
    //console.log(dateTrimise)
    const rezultat= await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${idWishlist}/items/${idItem}/buy`,dateTrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    
   return rezultat.data
}
export default BuyItem;