import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";
import Button from "@mui/material/Button";
import "./flexbox.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const RecipeSearch = ({ recipes }) => {
  const [query, setQuery] = useState("");

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const checker = recipes
    .filter((recipe) => {
      if (query === "") {
        return recipe;
      } else if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
        return recipe;
      }
    })
    .map((recipe) => {
      return (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image}/>
          <Button variant="contained" color="primary">
            Details
          </Button>
        </div>
      );
    });

  return (
    <>
      <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon" />
        <input type="text" placeholder="Momo" onChange={inputHandler} />
      </div>
      {checker}
    </>
  );
};

export default RecipeSearch;
