import NewRecipeForm from "./NewRecipeForm";
import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";

const RecipeContainer = () => {
  const [recipesForm, setRecipesForm] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipesForm(data)
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

  const [equipments, setEquipments] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/equipments")
    .then(response => response.json())
    .then(data => {
     setEquipments(data)
     })
  
  }, [])


  const [measurements, setMeasurements] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/measurements")
    .then(response => response.json())
    .then(data => {
     setMeasurements(data)
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
      .then((savedRecipe) => setRecipesForm([...recipesForm, savedRecipe]));
  };




  return (
    <>
  
      {ingredients ? <NewRecipeForm postRecipe={postRecipe} 
                                    ingredients = {ingredients} 
                                    equipments = {equipments} 
                                    measurements= {measurements}/>: ("")}

      <RecipeList recipesForm={recipesForm} />
      
    </>
  );
};
export default RecipeContainer;
