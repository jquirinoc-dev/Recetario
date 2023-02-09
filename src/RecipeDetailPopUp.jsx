import React, { useState } from 'react'

export const RecipeDetailPopUp = ( { title, desc, image, showPopup, setShowPopup} ) => {

    //set state for showPopup initialized to showPop prop
    const handleClose = () => {
        setShowPopup(false);
        document.body.style.overflow = "auto";
    }



  return (
    <div className={`recipe_detail_popup ${showPopup ? "active" : ""}`}>
        
        <div className="recipe_detail_popup_inner">
            <div className="recipe_detail_popup_close" onClick={() => handleClose()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
            <div className="recipe_detail_popup_image">
                <img src={ image } alt={ title } />
            </div>
            <div className="recipe_detail_popup_title">
                <h1>{ title }</h1>
            </div>
            <div className="recipe_detail_popup_desc">
                <p>{desc}</p>
            </div>
        </div>
        
    </div>
  )
}
