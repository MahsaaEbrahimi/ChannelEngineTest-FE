import React from "react";

export default function Pagination({total , orderPerPage, currentPage , paginate , reducePageNumber , increasePageNumber}){

    let pages= Math.ceil(total/orderPerPage)
    const pageNumbers=[]
    for(let i = 1 ; i <= pages ; i++){
        pageNumbers.push(i)
    }

    const numberList= pageNumbers.map((number)=>{
        let active=(currentPage===number)?"active":""
        let disabled=(pages<=1)?"disabled":""
        return <li key={number} className={`page-item ${active} ${disabled}`}><a class="page-link" href="#" onClick={()=>paginate(number)}>{number}</a></li>
    })
    return(
        <nav aria-label="container">
            <ul className="pagination justify-content-center mt-2">
                {currentPage>1 ?
                    (<li className="page-item">
                        <a className="page-link" onClick={reducePageNumber} >Previous</a>
                    </li>):"" }
                {numberList}
                {currentPage< pages ? 
                    (<li className="page-item">
                        <a className="page-link" onClick={increasePageNumber} >Next</a>
                    </li>):""}
            </ul>
            


        </nav>
        
    )
}

