import React from 'react'

export default function form({modifycity,datacity,setdatacity}) {
    function handlesearch(e){
        setdatacity(e.target.value)
    }
    return (
        <div className='search-bar'>
        <input type="text" value={datacity} onChange={handlesearch} onKeyPress={modifycity} placeholder='fill for country'/>
        </div>
    )
}
