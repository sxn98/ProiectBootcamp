import axios from "axios";

export async function getGrupuri(){
    const rezultat= await axios.get('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups',{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    //console.log(rezultat.data.groups)

   return rezultat.data.groups
   
}
export async function getGrupuriSearch(search){


    const rezultat= await axios.get(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups?search=${search}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    //console.log(rezultat.data.groups)

   return rezultat.data.groups
   
}

export default {getGrupuri,getGrupuriSearch};