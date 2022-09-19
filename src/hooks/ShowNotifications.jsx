  import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getNotifications from "../utils/getNotifications";


const ShowNotifications=()=>{
    const navigate=useNavigate()
    var timeLimit=new Date()
    timeLimit.setDate(timeLimit.getDate()-1)
    timeLimit=timeLimit.toISOString().slice(0,10)

    const[yesterday,setYesterday]=useState(timeLimit)
    const[dataNotificari,setDataNotificari]=useState("")


    useEffect(()=>{
        getNotifications().then(notificari=>{
            setDataNotificari(notificari)
            console.log(notificari)
        })
       
        if(!localStorage.getItem('user-info')){
            console.log('')
            navigate('/')
        }
    },[])

    let rows=[]
    for(let i=0;i<dataNotificari.length;i++){

        var notificationDay=new Date(dataNotificari[i].createdAt.substring(0,10))
        notificationDay.setDate(notificationDay.getDate())
        notificationDay=notificationDay.toISOString().slice(0,10)

        if(notificationDay>=yesterday){
            rows.push(
                <tr key={dataNotificari[i].id}>
                    <td>{dataNotificari[i].category}</td>
                    <td>{dataNotificari[i].createdAt.substring(0,10)}</td>
                    <td>{dataNotificari[i].details}</td>
                   
                </tr>
            )
        }

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