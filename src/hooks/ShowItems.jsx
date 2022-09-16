import { useState, useEffect, createContext,useContext } from 'react'
import {getItems} from '../utils/getItems';
import DeleteItem from '../utils/DeleteItem';
import { StateContext,StateProvider } from '../routes/Items';
import UpdateItem from '../utils/UpdateItem';

 const ShowItems=()=>{
    const containLetter=/[a-zA-Z]/g
    const[formHidden,setFormHidden]=useState(true)
    const[data,setData]=useState("");
    const[schimbat,setSchimbat]=useContext(StateContext)
    const[numeItem,setNumeItem]=useState("")
    const[detalii,setDetalii]=useState("")
    const[firma,setFirma]=useState("")
    const[model,setModel]=useState("")
    const[marime,setMarime]=useState("")
    const[adresaLink,setAdresaLink]=useState("")
    const[cantitate,setCantitate]=useState("")
    const[idItemSchimbat,setIdItemSchimbat]=useState("")
    let[actualizat,setActualizat]=useState(0)
    const[mesaj,setMesaj]=useState("")
   // console.log(schimbat)

    useEffect(()=>{
        getItems().then(itemetrimise=>{
            setData(itemetrimise)
            
        })
        //console.log(schimbat)
    },[schimbat,actualizat])
   /*() getItems().then(async itemetrimise=>{

        if(!data){
            setData(await itemetrimise)

           
        }
        
    })*/

    const Actualizare=async ()=>{
        if(containLetter.test(cantitate)){
            setMesaj(`Campul "Cantitate" nu trebuie sa contina litere!`)
        }else{
            await UpdateItem(numeItem,detalii,cantitate,marime,firma,model,adresaLink,idItemSchimbat)
            console.log(idItemSchimbat)
            setFormHidden(true)
            setActualizat(actualizat+1)
        }
        
    }

    const SetareDate=(propIteme)=>{
        setNumeItem(propIteme.name)
        setDetalii(propIteme.details)
        setFirma(propIteme.maker)
        setModel(propIteme.model)
        setMarime(propIteme.size)
        setAdresaLink(propIteme.link)
        setCantitate(propIteme.quantity)
        setIdItemSchimbat(propIteme.id)
    }

    let rows=[]
    for(let i=0;i<data.length;i++){
        rows.push(
            <tr key={data[i].id}>
                <td>{data[i].name}</td>
                <td>{data[i].details}</td>
                <td>{data[i].maker}</td>
                <td>{data[i].model}</td>
                <td>{data[i].size}</td>
                <td>{data[i].link}</td>
                <td>{data[i].quantity}</td>
                <td><button onClick={async (e)=>{
                    await DeleteItem(data[i].id)
                    setData(data.filter(eliminat=>{
                        return eliminat.id!==data[i].id
                    }))
                    }}>Sterge</button></td>
                <td><button onClick={(e)=>{SetareDate(data[i]);setFormHidden(false)}}>Modifica</button></td>
            </tr>
        )
    }

    
    return(
        <>
            <table className='tabeliteme'>
                <tbody>
                    
                    <tr>
                    
                        <th colSpan={2}> Iteme totale</th>
                    </tr>
                    <tr>
                        <td>Nume</td>
                        <td>Detalii</td>
                        <td>Firma</td>
                        <td>Model</td>
                        <td>marime</td>
                        <td>link</td>
                        <td>Cantitate</td>
                        
                    </tr>
                    {rows}
                </tbody>
            </table>

            <div className={formHidden? "divformModifica":"divform"}>
                <form onSubmit={(e)=>{e.preventDefault()}} className='form'>
                    <label>Modificare item</label>
                    <label>nume</label>
                    <input value={numeItem} onChange={(e)=>{setNumeItem(e.target.value)}}></input>
                    <label>Detalii</label>
                    <input value={detalii} onChange={(e)=>{setDetalii(e.target.value)}}></input>
                    <label>Firma</label>
                    <input value={firma} onChange={(e)=>{setFirma(e.target.value)}}></input>
                    <label>Model</label>
                    <input value={model} onChange={(e)=>{setModel(e.target.value)}}></input>
                    <label>Marime</label>
                    <input value={marime} onChange={(e)=>{setMarime(e.target.value)}}></input>
                    <label>Link</label>
                    <input value={adresaLink} onChange={(e)=>{setAdresaLink(e.target.value)}}></input>
                    <label>Cantitate</label>
                    <input value={cantitate} onChange={(e)=>{setCantitate(e.target.value)}}></input>
                    <button className='ItemChangeOk' onClick={(e)=>{Actualizare()}}>ok</button>
                    <button className='ItemChangeCancel' onClick={(e)=>{setFormHidden(true);setMesaj("")}}>cancel</button>
                    <label>{mesaj}</label>
                </form>
            </div>
        </>

    )
}
export default ShowItems;

