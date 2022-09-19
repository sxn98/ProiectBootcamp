import axios from "axios";

export async function getSharedGroups(){
    const rezultat= await axios.get('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/shared',{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })


   return rezultat.data.groups
   
}export default getSharedGroups;