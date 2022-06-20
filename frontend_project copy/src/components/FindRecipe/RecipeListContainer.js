import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";
import RecipeSearch from "./RecipeSearch";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 380;

const RecipeListContainer = () => {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  


  

  return (
    <div>
        
        <RecipeSearch recipes={recipes} setRecipes={setRecipes} />
        {/* <RecipeList recipes={recipes} /> */}
     
    </div>
  );
};

export default RecipeListContainer;
