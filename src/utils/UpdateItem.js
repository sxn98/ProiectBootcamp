import axios from "axios";

 async function AdaugaItem(nume,detalii,cantitate,marime,firma,model,adresa,id){
    let body={
        name:nume,
        details:detalii,
        quantity:parseInt(cantitate),
        size:marime,
        maker:firma,
        model:model,
        link:adresa
    }

    
    await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items/${id}`,body,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
        console.log(response)
 
    }).catch(err=>{
        console.log(err.message)
        
        
    })

}
export default AdaugaItem;