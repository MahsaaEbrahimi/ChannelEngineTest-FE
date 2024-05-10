import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import Order from "./Order"; 
import Pagination from './Pagination';

export default function OverView(){

    const apikey ='541b989ef78ccb1bad630ea5b85c6ebff9ca3322';

    const[orderNumber,setTotalCount]=useState(0)
    const[allOrders,setAllOrders]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[orderPerPage,setOrderPerPage]=useState(10)

    useEffect(()=>{
        axios.get(`https://api-dev.channelengine.net/api/v2/orders?apikey=${apikey}`)
        .then(data=>{
            setTotalCount(data?.data?.TotalCount)
            setAllOrders(data?.data?.Content)
        })
    },[])


    const indexOfLastOrder = currentPage*orderPerPage;
    const indexOfFirstOrder= indexOfLastOrder-orderPerPage
    const currentOrders=allOrders.slice(indexOfFirstOrder,indexOfLastOrder)

    const paginate =(number) => setCurrentPage(number)

    function reducePageNumber(){
        if(currentPage===1){
            setCurrentPage(1)
        }else{
            setCurrentPage(privVal=>privVal-1)
        }
    }

    function increasePageNumber(){
        if(currentPage===Math.ceil(orderNumber/orderPerPage)){
            setCurrentPage(Math.ceil(orderNumber/orderPerPage))
        }else{
            setCurrentPage(privVal=>privVal+1)
        }
    }

    return(
        <div>
            
            <div className="container">
                <h2 className="text-secondary mb-3">Order OverViwe</h2>
                <Order orders={currentOrders}/>
                <Pagination
                    total={orderNumber}
                    orderPerPage={orderPerPage}
                    paginate={paginate}
                    reducePageNumber={reducePageNumber}
                    increasePageNumber={increasePageNumber}
                />
                
            </div>
        </div>
    )
}


