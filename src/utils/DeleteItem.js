import axios from "axios";

 async function DeleteItem(id){
    
    await axios.delete(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items/${id}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    }).then(response=>{
      
 
    }).catch(err=>{
        console.log(err.message)
       
        
    })

}
export default DeleteItem;