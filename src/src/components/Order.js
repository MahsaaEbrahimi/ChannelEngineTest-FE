import React from "react";

export default function Order({orders}){

    const orderLi=orders.map(order=>{
        return(
            <div key={order.id} className="row p-2 border border-secondary">
                <div className="col-1">{order.Id}</div>
                <div className="col-4">{order.ChannelName}</div>
                <div className="col-3">{order.ChannelOrderNo}</div>
                <div className="col-2">{order.Status}</div>
                <div className="col-2"><button className="btn btn-outline-secondary">more ditails</button></div>
            </div>
        )
    })
    return(
        // <ul className="list-group mb-4">
        //     <div className="list-group-item d-flex justify-content-between">
        //         <div>id</div>
        //         <div>channel name</div>
        //         <div>channel order no</div>
        //         <div>status</div>
        //         <div>ditails</div>
        //     </div>
        //     {orderLi}
        // </ul>
        <div className="container-fluid">
            <div className="row p-2 border border-secondary">
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