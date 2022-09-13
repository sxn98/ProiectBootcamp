  import { useState,useEffect } from "react";
import getNotifications from "../utils/getNotifications";


const ShowNotifications=()=>{
    const[dataNotificari,setDataNotificari]=useState("")

    useEffect(()=>{
        getNotifications().then(notificari=>{
            setDataNotificari(notificari)
        })
    },[])

    let rows=[]
    for(let i=0;i<dataNotificari.length;i++){
        
        rows.push(
            <tr key={dataNotificari[i].id}>
                <td>{dataNotificari[i].category}</td>
                <td>{dataNotificari[i].createdAt.substring(0,10)}</td>
                <td>{dataNotificari[i].details}</td>
               
            </tr>
        )
    }


    return(
        <table className='tabelnotificari'>
            <tbody>
                <tr>
                    <th colSpan={3}>Notificari</th>
                </tr>
                {rows}
            </tbody>
        </table> 
    )
}
export default ShowNotifications;