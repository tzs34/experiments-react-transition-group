import React from 'react'

const SearchPanel = ({onClick}) =>{

    function handleOnClick(e){
        if(onClick){
            onClick(e)
        }
    }

    return (
        <div className="search-panel" >
            <div className='search-box'>
                <input type="text" />
                <button className="search-button"  onClick={handleOnClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchPanel
