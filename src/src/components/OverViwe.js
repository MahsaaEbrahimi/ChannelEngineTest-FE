import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import Order from "./Order"; 
import Pagination from './Pagination';
import StatusFilter from "./StatusFilter";

export default function OverView(){

    const apikey ='541b989ef78ccb1bad630ea5b85c6ebff9ca3322';
    const[Loading,setLoading]=useState(false)
    const[orderNumber,setTotalCount]=useState(0)
    const[allOrders,setAllOrders]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[orderPerPage,setOrderPerPage]=useState(10)
    const[status,setStatus]=useState("")

  
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api-dev.channelengine.net/api/v2/orders?apikey=${apikey}`)
        .then(data=>{
            setTotalCount(data?.data?.TotalCount)
            setAllOrders(data?.data?.Content)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error.message)
            setLoading(false)
        })
    },[])

    function aplayFilter(status){
        if(status==="ALL"){
            setLoading(true)
            axios.get(`https://api-dev.channelengine.net/api/v2/orders?apikey=${apikey}`)
            .then(data=>{
                setTotalCount(data?.data?.TotalCount)
                setAllOrders(data?.data?.Content)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error.message)
                setLoading(false)
            })

        }else{
            setLoading(true)
            axios.get(`https://api-dev.channelengine.net/api/v2/orders?statuses=${status}&apikey=${apikey}`)
            .then(data=>{
                setTotalCount(data?.data?.TotalCount)
                setAllOrders(data?.data?.Content)
                setCurrentPage(1)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error.message)
                setLoading(false)
            })
        }
    }


    const indexOfLastOrder = currentPage*orderPerPage;
    const indexOfFirstOrder= indexOfLastOrder-orderPerPage
    const currentOrders=allOrders.slice(indexOfFirstOrder,indexOfLastOrder)

    const paginate =(number) => setCurrentPage(number)

    function reducePageNumber(){
        setCurrentPage(privVal=>privVal-1)
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
            <div className="container-md">
                <h2 className="text-secondary mb-3">Order OverViwe</h2>
                <div className="border border-secondary d-flex  align-items-center p-3 mb-2 rounded">
                    <h4 className="text-secondary me-5">Filter by:</h4>
                    <label className="text-secondary">status: 
                        <StatusFilter aplayFilter={aplayFilter}/>
                    </label>
                </div>
                {Loading?
                   (<div class="spinner-border text-primary" role="status">
                       <span class="visually-hidden">Loading...</span>
                    </div>): 
                    (<Order orders={currentOrders}/>)
                }
                
                { !Loading &&
                    <Pagination
                        total={orderNumber}
                        orderPerPage={orderPerPage}
                        paginate={paginate}
                        reducePageNumber={reducePageNumber}
                        increasePageNumber={increasePageNumber}
                        currentPage={currentPage}
                    />
                }
                

                
            </div>
        </div>
    )
}


