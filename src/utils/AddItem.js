import axios from "axios";

 async function AdaugaItem(nume,detalii,cantitate,marime,firma,model,adresa){
    let datetrimise={
        name:nume,
        details:detalii,
        quantity:parseInt(cantitate),
        size:marime,
        maker:firma,
        model:model,
        link:adresa
    }


    console.log(datetrimise)
    console.log(`Bearer ${localStorage.getItem('user-info')}`)
    await axios.post('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items',datetrimise,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
        console.log(response)
 
    }).catch(err=>{
        console.log(err.message)
        //setEroare("Email or password is in a wrong format")
        
    })

}
export default AdaugaItem;