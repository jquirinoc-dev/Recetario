import { useState } from 'react'
import './index.css'
import { Recipees } from './Recipees'
import { TopBar } from './TopBar'

export const App = () => {
  const [recipees, setRecipees] = useState([
    { id: 1, title: 'Pizza', image: 'pizza.jpg' },
    { id: 2, title: 'Hamburguesa', image: 'hamburguesa.jpg' },
    { id: 3, title: 'Ensalada', image: 'ensalada.jpg' }
  ])
  
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
