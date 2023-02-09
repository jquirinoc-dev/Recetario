import React, { useEffect, useState } from 'react'
import logo from './assets/softbrot.png'
import { handleMoveTop } from './Resources/HandleMoveTop'

export const TopBar = ( {onSearch} ) => {

    const [search, setSearch] = useState('')

    const updateSearch = e => {
        setSearch(e.target.value)
        onSearch(e.target.value)
    }



  return (
    <div className="topbar">
        <div className="topbar_logo">
            <img src= {logo} alt="By Softbrot" onClick={handleMoveTop}/>
        </div>
        <div className="topbar_search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#474747" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            <input 
            type="text" 
            placeholder="Buscar recetas"
            value={search}
            onChange={updateSearch}
            />
        </div>
    </div>


  )
}
