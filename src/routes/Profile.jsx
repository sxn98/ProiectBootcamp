import '../css/Profil.css'
import { useState,useEffect } from 'react';
import getMe from '../utils/getMe';
import UpdateMe from '../utils/UpdateMe';
const Profile=()=>{

    const containLetter=/[a-zA-Z]/g
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[dob,setDob]=useState("")
    const[city,setCity]=useState("")
    const[street,setStreet]=useState("")
    const[zip,setZip]=useState("")
    const[country,setCountry]=useState("")
    const[isHidden,setIsHidden]=useState("true")
    let[update,setUpdate]=useState(0)
    const[mesaj,setMesaj]=useState("")
    useEffect(()=>{
        getMe().then(eu=>{
           
            setName(eu.name)
            setPhone(eu.phone)
            setDob(eu.dob)
            setCity(eu.address.city)
            setStreet(eu.address.street)
            setZip(eu.address.zip)
            setCountry(eu.address.country)
                
        })
    },[update])

    const Actualizare=async ()=>{
        if(containLetter.test(phone)){
            setMesaj(`Campul "Phone" nu trebuie sa contina litere!`)
        }else{
            await UpdateMe(name,phone,dob,city,street,zip,country)
            setIsHidden(true)
            setUpdate(update+1)
        }

       
        
    }

    return(
        <div className="profil">
            
            <div className='datepersonale'>
                <label className='labelprofil'>Profilul tau</label>
                
                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value);setIsHidden(false)}} ></input>
                <label>Phone</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value);setIsHidden(false)}}></input>
                <label>Date of Birth</label>
                <input value={dob.substring(0,10)} onChange={(e)=>{setDob(e.target.value);setIsHidden(false)}}></input>
                <label>{mesaj}</label>
            </div>
            <div className='adresa'>
                <label>City</label>
                <input value={city} onChange={(e)=>{setCity(e.target.value);setIsHidden(false)}}></input>
                <label>Street</label>
                <input value={street} onChange={(e)=>{setStreet(e.target.value);setIsHidden(false)}}></input>
                <label>Zip</label>
                <input value={zip} onChange={(e)=>{setZip(e.target.value);setIsHidden(false)}}></input>
                <label>Country</label>
                <input value={country} onChange={(e)=>{setCountry(e.target.value);setIsHidden(false)}}></input>
            </div>
            
            <button className={isHidden? "hidden":"visible"} onClick={(e)=>{Actualizare()}}>save</button>
            
        </div>
    )

}
export default Profile;