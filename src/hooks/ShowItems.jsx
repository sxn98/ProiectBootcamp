import { useState, useEffect, createContext,useContext } from 'react'
import getItems from '../utils/getItems';
import DeleteItem from '../utils/DeleteItem';
import { StateContext,StateProvider } from '../routes/Items';


 const ShowItems=()=>{

    
    const[data,setData]=useState("");
    const[schimbat,setSchimbat]=useContext(StateContext)
    console.log(schimbat)

    useEffect(()=>{
        getItems().then(itemetrimise=>{
            setData(itemetrimise)
            
        })
        console.log(schimbat)
    },[schimbat])
   /*() getItems().then(async itemetrimise=>{

        if(!data){
            setData(await itemetrimise)

           
        }
        
    })*/


    let rows=[]
    for(let i=0;i<data.length;i++){
        rows.push(
            <tr key={data[i].id}>
                <td>{data[i].name}</td>
                <td>{data[i].maker}</td>
                <td>{data[i].model}</td>
                <td>{data[i].size}</td>
                <td>{data[i].quantity}</td>
                <td><button onClick={async (e)=>{
                    await DeleteItem(data[i].id)
                    setData(data.filter(eliminat=>{
                        return eliminat.id!==data[i].id
                    }))
                    }}>Sterge</button></td>
            </tr>
        )
    }

    
    return(
        <table className='tabeliteme'>
            <tbody>
                
                <tr>
                
                    <th colSpan={2}> Iteme totale</th>
                </tr>
                <tr>
                    <td>Nume</td>
                    <td>Firma</td>
                    <td>Model</td>
                    <td>marime</td>
                    <td>Cantitate</td>
                    
                </tr>
                {rows}
            </tbody>
        </table>
        

    )
}
export default ShowItems;

