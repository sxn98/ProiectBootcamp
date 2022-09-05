import axios from "axios";


async function Adauga(nume,detalii){
    let datetrimise={
        name:nume,
        details:detalii,
        itemIds:[
            0
        ]
    }


    const rezultat= await axios.post('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists',datetrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })
    

   return rezultat.data
}
export default Adauga;
