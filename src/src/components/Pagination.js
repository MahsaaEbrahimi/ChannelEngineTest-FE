import React from "react";

export default function Pagination({total , orderPerPage , paginate , reducePageNumber , increasePageNumber}){
    const pageNumbers=[]
    for(let i = 1 ; i <= Math.ceil(total/orderPerPage) ; i++){
        pageNumbers.push(i)
    }

    const numberList= pageNumbers.map((number)=>{
        return <li key={number} className="page-item"><a class="page-link" href="#" onClick={()=>paginate(number)}>{number}</a></li>
    })
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-2">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={reducePageNumber} >Previous</a>
                </li>
                {numberList}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={increasePageNumber} >Next</a>
                </li>
            </ul>
        </nav>
        
    )
}

