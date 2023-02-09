import React from 'react'
import { Recipe } from './Recipe'

export const Recipees = ( { recipees } ) => {
  return (
    <div className="recipees-container">
        {recipees.map(recipe => (
            <Recipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            desc={recipe.desc}
            />
        ))}
    </div>
  )
}
