import React from "react";
import { useParams,Link } from "react-router-dom";
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
        .catch((error)=>{
            console.log(error.message)
        })

    },[params.id]) 

    var date = new Date(orderData.OrderDate)
    const orderTime=date.toLocaleTimeString()
    const orderDate= date.toDateString()

    var createD = new Date(orderData.CreatedAt)
    const createTime =createD.toLocaleTimeString()
    const createDate=createD.toDateString()
   

    return(
        <div className="container d-flex flex-column align-items-center justify-content-between mt-4">
            
            <div className="container border border-secondary rounded m-1 ">
                <h3 className="text-secondary p-2 text-start">Order details</h3>
                <div className="row backGround  p-1">
                    <div className="col text-start">Order ID</div>
                    <div className="col text-start text-start text-start text-start "> {orderData.Id}</div>
                </div>
                <div className="row p-1">
                    <div className="col text-start text-start text-start text-start">Channel Name</div>
                    <div className="col text-start text-start text-start text-start">{orderData.GlobalChannelName}</div>

                </div>
                <div className="row backGround p-1">
                    <div className="col text-start text-start text-start">Channel Order NO</div>
                    <div className="col text-start text-start text-start">{orderData.ChannelOrderNo}</div>

                </div>
                <div className="row p-1">
                    <div className="col text-start text-start text-start">Commercial Order NO</div>
                    <div className="col text-start text-start text-start">{orderData.CommercialOrderNo}</div>
                 </div>

                <div className="row backGround p-1">
                    <div className="col text-start text-start">Order Date</div>
                    <div className="col text-start text-start">{orderDate}, {orderTime}</div>
                </div>
                <div className="row p-1">
                    <div className="col text-start text-start">Create Date</div>
                    <div className="col text-start text-start">{createDate} , {createTime}</div>

               </div>
               <div className="row backGround p-1">
                    <div className="col text-start text-start">Status</div>
                    <div className="col text-start text-start">{orderData.Status}</div>

               </div>

               <div className="row p-1">
                    <div className="col text-start text-start">Business Order</div>
                    <div className="col text-start text-start">{orderData.IsBusinessOrder ? "Yes" : "No"}</div>

               </div>

            </div>
            <div  className="container border border-secondary rounded m-1 ">
                <h3 className="text-secondary p-2 text-start">Personal Details</h3>
                <div className="row backGround p-1">
                    <div className="col text-start">Email</div>
                    <div className="col text-start">{orderData.Email}</div>

                </div>
                <div className="row p-1">
                    <div className="col text-start">Phone</div>
                    <div className="col text-start">{orderData.Phone}</div>

                </div>
                <div className="row backGround p-1">
                    <div className="col text-start">Shipping Address</div>
                <div className="col text-start">Mr/Mrs {orderData?.ShippingAddress?.FirstName} {orderData?.ShippingAddress?.LastName}
                    <br></br>
                    {orderData.ShippingAddress?.Original}
                </div>

                </div>

            </div>
            <Link to=".." className="btn btn-secondary mt-3">Go Back</Link>
           
        </div>

    )
}