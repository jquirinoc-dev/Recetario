import { useEffect, useState } from 'react'
import './index.css'
import { Recipees } from './Recipees'
import { TopBar } from './TopBar'
import { recipeesFile } from './Resources/Recipees'

export const App = () => {
  const [recipees, setRecipees] = useState([]);

  // Fetch recipees from Recipees.js
  useEffect(() => {
    setRecipees(recipeesFile);
  }, [])


  
  const [search, setSearch] = useState('')

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <TopBar onSearch={handleSearch}/>
      <Recipees recipees={recipees.filter(recipe =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        )}/>
    </>
  )
}
