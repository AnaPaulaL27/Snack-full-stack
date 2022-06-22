import { useState, useEffect } from "react";
import Recipe from "./Recipe";

const RecipeRenderedList = () => {
  const [recipes2, setRecipes2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes2(data));
   
  }, []);

  useEffect(() => {
    console.log(recipes2)

  

  }, [recipes2]);
  

  return (
    <>
      <Recipe recipes2={recipes2} />
    </>
  );
};

export default RecipeRenderedList;
