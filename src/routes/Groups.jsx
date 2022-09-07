import ShowGroups from '../hooks/ShowGroups'
import AddGroup from '../utils/AddGroup'
import { useState,createContext } from 'react'
import '../css/Grup.css'

export const StateContextGrup=createContext();

const Groups=()=>{


    const[numeGrup,setNumeGrup]=useState("")
    const[detalii,setDetalii]=useState("")
    const[mesaj,setMesaj]=useState("")
    let[schimbat,setSchimbat]=useState(0)
    

    const GrupAdaugat=async ()=>{
        await AddGroup(numeGrup,detalii)
        setMesaj(`Ati creat grupul ${numeGrup}!`)
        setSchimbat(schimbat+1)
        
    }

    return(
        <StateContextGrup.Provider value={[schimbat]}>

        <div className="grup">  

            <ShowGroups/>

            <div className='adaugareGrup'>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeGrup(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetalii(e.target.value)}></input>

                <button onClick={()=>{GrupAdaugat()}}>Adauga item nou</button>
                <label>{mesaj}</label>
            </div>        
        </div>
        </StateContextGrup.Provider>
    )

}
export default Groups;