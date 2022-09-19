import axios from "axios";

export async function getItems(){
    const rezultat= await axios.get('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items',{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    


   return rezultat.data.items
   
}

export async function getItemsSearch(search){
    const rezultat= await axios.get(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items?search=${search}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    


   return rezultat.data.items
   
}export default {getItems,getItemsSearch};