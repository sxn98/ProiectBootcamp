import ShowItems from "../hooks/ShowItems";
import { useState,createContext } from "react";
import AdaugaItem from "../utils/AddItem";


export const StateContext=createContext();

const Items=()=>{

    const[numeitem,setNumeitem]=useState("")
    const[detalii,setDetalii]=useState("")
    const[cantitate,setCantitate]=useState("")
    const[marime,setMarime]=useState("")
    const[firma,setFirma]=useState("")
    const[model,setModel]=useState("")
    const[adresa,setAdresa]=useState("")
    const[mesaj,setMesaj]=useState("")
    let[schimbat,setSchimbat]=useState(0)

    const itemAdaugat=async ()=>{
        await AdaugaItem(numeitem,detalii,cantitate,marime,firma,model,adresa)
        setMesaj(`Ati adaugat ${numeitem}!`)
        //window.location.reload(false)
        setSchimbat(schimbat+1)
        console.log(schimbat)
    }



    return(
        <StateContext.Provider value={[schimbat]}>
        <div className='iteme'>
        

            <ShowItems />

            
            <div className='adaugare'>
                <label>Adaugare item nou</label>
                <input type="text" placeholder='nume item' onChange={(e)=>setNumeitem(e.target.value)}></input>
                <input type="text" placeholder='detalii' onChange={(e)=>setDetalii(e.target.value)}></input>
                <input type="text" placeholder='cantitate' onChange={(e)=>setCantitate(e.target.value)}></input>
                <input type="text" placeholder='marime' onChange={(e)=>setMarime(e.target.value)}></input>
                <input type="text" placeholder='firma' onChange={(e)=>setFirma(e.target.value)}></input>
                <input type="text" placeholder='model' onChange={(e)=>setModel(e.target.value)}></input>
                <input type="text" placeholder='link' onChange={(e)=>setAdresa(e.target.value)}></input>
                <button onClick={()=>{itemAdaugat()}}>Adauga item nou</button>
                <label>{mesaj}</label>
            </div>
        </div>
        </StateContext.Provider>
    )
}
export default Items;