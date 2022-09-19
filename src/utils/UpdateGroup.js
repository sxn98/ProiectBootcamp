import axios from "axios";

 async function UpdateGroup(nume,detalii,id){
    let body={
        name:nume,
        details:detalii,
    }

    
    await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${id}`,body,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
        console.log(response)
 
    }).catch(err=>{
        console.log(err.message)
        
        
    })

}
export default UpdateGroup;