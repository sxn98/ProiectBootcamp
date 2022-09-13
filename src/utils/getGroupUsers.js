import axios from "axios";

export async function getGroupUsers(grup){
    const rezultat= await axios.get(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups?search=${grup}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    //console.log(rezultat.data.groups)

   return rezultat.data.groups[0].users
   
}export default getGroupUsers