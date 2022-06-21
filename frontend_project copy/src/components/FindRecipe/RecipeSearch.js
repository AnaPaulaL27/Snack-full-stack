import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";
import Button from "@mui/material/Button";
import "./flexbox.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { color } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";


const RecipeSearch = ({ recipes }) => {
  const [query, setQuery] = useState("");
  const [radioState, setRadioState] = useState('none');

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
        <div className="card" key={recipe.id}>
          <h2 className="title">{recipe.name}</h2>
          <a href='/find-recipe/{params.productId}'>
          <img className="image" src={recipe.image} alt="waiting" /></a>
          {/* <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#e0dfdc",
              padding: "10px 10px",
              fontSize: "10px",
              color: "black",
            }}
          >
            Details
          </Button> */}
        </div>
      );
    });

  return (
    <>
    <div className="searchContainer">
      <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon" />
        <input type="text" placeholder="Momo" onChange={inputHandler} />
      </div>

      <FormControl className="filter">
          <FormLabel id="demo-row-radio-buttons-group-label">Cuisine</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="italian" control={<Radio />} label="Italian" />
            <FormControlLabel value="american" control={<Radio />} label="American" />
            <FormControlLabel value="mexican" control={<Radio />} label="Mexican" />
            <FormControlLabel value="chinese" control={<Radio />} label="Chinese" />
            <FormControlLabel value="nigerian" control={<Radio />} label="Nigerian" />
          </RadioGroup>
        </FormControl>
        </div>
      <div className="parentCard">
        {checker}
      </div>
    </>
  );
};

export default RecipeSearch;
