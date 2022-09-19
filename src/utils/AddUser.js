import axios from "axios";

export async function AddUser(idgrup,iduser){
    const dateTrimise={
        userIds:[iduser]
    }

    const rezultat= await axios.post(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${idgrup}/users`,dateTrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
   return rezultat.data 

}

export default AddUser;
