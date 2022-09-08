import axios from "axios";

async function UpdateMe(name,phone,dob,city,street,zip,country){
   let body={
        name:name,
        phone:phone,
        dob:dob,
        address:{
            city:city,
            street:street,
            zip:zip,
            country:country
        }
    }

    const rezultat= await axios.put(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/me`,body,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('user-info')}`
        }
    })

    
  // return rezultat.data.users
   
}export default UpdateMe;