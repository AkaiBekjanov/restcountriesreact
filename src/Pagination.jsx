import React from "react";


export const Pagination=({totalElems,elemsPerPage,setCurrentPage})=>{
    let pages=[];

    for(let i=1; i < totalElems / elemsPerPage; i++){
        pages.push(i);
    }

    return(
        <div className="pageBtns">
            {pages.map((pg,index)=>{
                return <button key={index}
                 onClick={()=>{
                    setCurrentPage(pg);
                 }}
                >{pg}</button>
            }
            )}
            
        </div>
    )
}