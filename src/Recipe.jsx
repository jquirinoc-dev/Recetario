import { useState } from "react";
import { RecipeDetailPopUp } from "./RecipeDetailPopUp"


export const Recipe = ({title, image, desc}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        // render RecipeDetailPopUp component
        console.log("clicked");
        setShowPopup(true);
        document.body.style.overflow = "hidden";

    }

  return (
    <>
    <div className="recipe" onClick={handleClick}>
        <div className="recipe_image">
            <img src={image} alt={title} />
        </div>
        <div className="recipe_title">
            <h3>{title}</h3>
        </div>
    </div>
    <RecipeDetailPopUp title={title} desc={desc} image={image} showPopup={showPopup} setShowPopup={setShowPopup}/>
    
    </>
  )
}
