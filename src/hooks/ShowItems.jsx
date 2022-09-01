import { useState,useEffect } from 'react'

import getItems from '../utils/getItems';

 const ShowItems=()=>{
    const[data,setData]=useState("");

    getItems().then(async date2=>{
        console.log(date2)
        if(!data){
            setData(await date2)
           
        }
        
    })
    let rows=[]
    for(let i=0;i<data.length;i++){
        rows.push(
            <tr key={data[i].id}>
                <td>{data[i].name}</td>
                <td>{data[i].maker}</td>
                <td>{data[i].model}</td>
                <td>{data[i].size}</td>
                <td>{data[i].quantity}</td>
                <td><button onClick={()=>console.log(data)}>Sterge</button></td>
            </tr>
        )
    }

    


    return(
        <tbody>
            <tr>
                <td>Nume</td>
                <td>Firma</td>
                <td>Model</td>
                <td>marime</td>
                <td>Cantitate</td>
                
            </tr>
            {rows}
        </tbody>

    )
}
export default ShowItems;

