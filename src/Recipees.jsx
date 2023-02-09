import React from 'react'
import { NothingFound } from './NothingFound'
import { Recipe } from './Recipe'

export const Recipees = ( { recipees } ) => {
  return (
    <div className="recipees-container">
        {recipees.length > 0 ?
            recipees.map(recipe => (
                <Recipe
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                desc={recipe.desc}
                />
            ))
            :
            <NothingFound />
        }
    </div>
  )
}
