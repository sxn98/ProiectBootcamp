import ShowGroups from '../hooks/ShowGroups'
import AddGroup from '../utils/AddGroup'
import { useState,createContext } from 'react'
import '../css/Grup.css'
import getMe from '../utils/getMe';
import AddUser from '../utils/AddUser';


export const StateContextGrup=createContext();

const Groups=()=>{


    const[numeGrup,setNumeGrup]=useState("")
    const[detalii,setDetalii]=useState("")
    const[mesaj,setMesaj]=useState("")
    let[schimbat,setSchimbat]=useState(0)
    

    const GrupAdaugat= ()=>{
        AddGroup(numeGrup,detalii).then(grupCreat=>{
            console.log(grupCreat)
            AddUser(grupCreat.id,grupCreat.ownerId).then(rezultat=>{
               
                setMesaj(`Ati creat grupul ${numeGrup}!`)
                setSchimbat(schimbat+1)
            })
            
        })
            
    }

    return(
        <StateContextGrup.Provider value={[schimbat]}>

        <div className="grup">  
        <label>Pentru a viziona un grup, faceti click pe numele lui</label>
            <ShowGroups/>

            <div className='adaugareGrup'>
                <label>Creare grup nou</label>
                <input type="text" placeholder='nume grup' onChange={(e)=>setNumeGrup(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetalii(e.target.value)}></input>

                <button onClick={()=>{GrupAdaugat()}}>Creaza</button>
                <label>{mesaj}</label>
            </div>        
        </div>
        </StateContextGrup.Provider>
    )

}
export default Groups;