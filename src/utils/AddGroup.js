import axios from "axios";

async function AddGroup(nume,detalii){
    let datetrimise={
        name:nume,
        details:detalii
    }

    console.log(datetrimise)
    const rezultat= await axios.post('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups',datetrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    

   return rezultat.data
}
export default AddGroup;
