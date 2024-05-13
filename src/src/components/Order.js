import React from "react";
import {Link} from 'react-router-dom'

export default function Order({orders}){

    const orderLi=orders.map(order=>{
        return(
            <div key={order.id} className="row p-2 border border-secondary d-flex align-items-center">
                <div className="col-1">{order.Id}</div>
                <div className="col-4">{order.GlobalChannelName}</div>
                <div className="col-3">{order.ChannelOrderNo}</div>
                <div className="col-2">{order.Status}</div>
                <div className="col-2">
                    <Link to={`/${order.ChannelOrderNo}`} className="btn btn-outline-secondary">more ditails</Link>
                </div>
            </div>
        )
    })
    return(
        <div className="container-fluid ">
            <div className="row p-2 border border-secondary rounded mb-1 header">
                <div className="col-1">id</div>
                <div className="col-4">channel name</div>
                <div className="col-3">channel order no</div>
                <div className="col-2">status</div>
                <div className="col-2">ditails</div>
            </div>
            {orderLi}
        </div>
    )
}