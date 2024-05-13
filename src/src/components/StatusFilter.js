import React, { useState } from "react";

export default function StatusFilter({aplayFilter}){
    const[chosedStatus,setStatus]=useState("ALL")

    function handleChange(event){
        setStatus(event.target.value)
        aplayFilter(event.target.value)
    }

    return(

        <select value={chosedStatus} className="select-box" onChange={handleChange} >
            <option selected value="ALL">SEE ALL</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="SHIPPED">SHIPPED</option>
            <option value="IN_BACKORDER">IN-BACKORDER</option>
            <option value="MANCO">MANCO</option>
            <option value="IN_COMBI">IN_COMBI</option>
            <option value="CLOSED">CLOSED</option>
            <option value="CANCELED">CANCELED</option>
            <option value="NEW">NEW</option>
            <option value="RETURNED">RETURNED</option>
            <option value="REQUIRES_CORRECTION">REQUIRES_CORRECTION</option>
            <option value="AWAITING_PAYMENT">AWAITING_PAYMENT</option>
        </select>
    )
}