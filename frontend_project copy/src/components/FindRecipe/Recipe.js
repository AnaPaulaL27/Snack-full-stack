import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Recipe = ({ recipes2 }) => {
  const params = useParams();

  const [chosenRecipe, setchosenRecipe] = useState();

  useEffect(() => {
    if (recipes2.length) {
      let filterChecker = recipes2.filter((recipe) => {
        if (recipe.id == params.recipeId) {
          console.log("filter found something");
          return recipe;
        }
      });

      setchosenRecipe(filterChecker[0]);
    }
  }, [recipes2]);

  return (
    <>
      {chosenRecipe ? (
        <>
          {
            <>
              <h1>Chosen Recipe:</h1>
              <h2>{chosenRecipe.name}</h2>
              {/* <img src={chosenRecipe.image} /> */}
              <p>Cuisine: {chosenRecipe.cuisine}</p>
              <p>
                <AccessTimeFilledIcon /> Prep: {chosenRecipe.prepTime} mins
              </p>
              <p>
                <AccessTimeIcon /> Cook: {chosenRecipe.prepTime} mins
              </p>
              <p> Ingredients
                {chosenRecipe.measurements.map((ingredient) => {
                  return (<> 
                  <li key={ingredient.id}>{ingredient.name}</li></>)
                          
                 } )}
               
              </p>
            </>
          }
        </>
      ) : (
        ""
      )}

      {/* <h1>{filterChecker[0].name}</h1> */}
    </>
  );
};

export default Recipe;

/*{Object.keys(filterChecker[0]).map((key)=>{
  return (<p>{key}: {filterChecker[0][key]}</p>)
})} */

