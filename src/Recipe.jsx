import React from 'react'

export const Recipe = ({title, image}) => {
  return (
    <div className="recipe">
        <div className="recipe_image">
            <img src={image} alt={title} />
        </div>
        <div className="recipe_title">
            <h3>{title}</h3>
        </div>
    </div>
  )
}
