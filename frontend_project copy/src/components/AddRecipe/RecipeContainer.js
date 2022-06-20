import NewRecipeForm from "./NewRecipeForm";
import { useState, useEffect } from "react";

const RecipeContainer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data)
      });

  }, []);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/ingredients")
    .then(response => response.json())
    .then(data => {
      setIngredients(data)
     })
  
  }, [])


  const postRecipe = (newRecipe) => {
    console.log(newRecipe);
    // add the new recipe to db/server
    fetch("http://localhost:8080/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    })
      // update locally
      .then((response) => response.json())
      .then((savedRecipe) => setRecipes([...recipes, savedRecipe]));
  };




  return (
    <>
      <h1>Delicious Recipes </h1>
      <p> a resource for food-lovers! </p>
      <NewRecipeForm postRecipe={postRecipe} ingredients = {ingredients}/>
      <RecipeList recipes={recipes} />
      
    </>
  );
};
export default RecipeContainer;
