import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";
import RecipeSearch from "./RecipeSearch";
import Grid from "@mui/material/Grid";

const RecipeListContainer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <Grid>
        <RecipeSearch recipes={recipes} />
        <RecipeList recipes={recipes} />
      </Grid>
    </>
  );
};

export default RecipeListContainer;
