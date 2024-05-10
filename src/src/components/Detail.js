import React from "react";
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";

export default function DetailPage(){
    const params = useParams()
    const[orderData,setOrderData]=useState({})
    
    
    useEffect(()=>{
        const ChannelOrderNo= toString(params.id)
        const apikey ='541b989ef78ccb1bad630ea5b85c6ebff9ca3322';
        axios.get(`https://api-dev.channelengine.net/api/v2/orders?channelOrderNos=${params.id}&apikey=${apikey}`)
        .then(data=>{
            setOrderData(data?.data?.Content[0])
        })

    },[params.id])

    console.log(orderData) 

    return(
        <div>
            <h1>more Details</h1>
            <h2>{orderData.ChannelName}</h2>

        </div>
        

    )
}