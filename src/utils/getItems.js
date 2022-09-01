import axios from "axios";

async function getItems(){
    const rezultat= await axios.get('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items',{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    

   // return rezultat.data.results.map(obiect=>obiect.name)
   return rezultat.data.results
   
}export default getItems;