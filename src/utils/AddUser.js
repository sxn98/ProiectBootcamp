import axios from "axios";

export async function AddUser(grup,iduser){
   /* const dateTrimise={
        userIds:iduser
    }
    const rezultat= await axios.post(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${grup}/users`,dateTrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    
   return rezultat.data */
   console.log(grup,iduser)
}

export default AddUser;
