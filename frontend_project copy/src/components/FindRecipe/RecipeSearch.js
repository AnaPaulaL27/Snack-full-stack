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
import { Link, useParams } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Scale } from "@mui/icons-material";


import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import Recipe from "./Recipe";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeSearch = ({ recipes }) => {
  const [query, setQuery] = useState("");
  // const [radioState, setRadioState] = useState("none");

  // const { url } = useRouteMatch;
  // console.log("url", url);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      return (<>
        <Card
          sx={{ maxWidth: 300 }}
          key={recipe.id}
          className="card"
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardHeader title={recipe.name} subheader={recipe.cuisine} />
          <Link to={`/find-recipe/${recipe.id}`}>
          <CardMedia
            className="image"
            component="img"
            image={recipe.image}
            alt={recipe.name}
    
          />
          </Link>

          <CardContent>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              More details
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                {recipe.name} has a prep time of{" "}
                {recipe.prepTime} minutes and takes {recipe.cookTime} minuties
                to cook.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        {/* <h1>hello</h1> */}
        </>
        
       /* <div className="card" key={recipe.id}>
          <Link to={`/find-recipe/${recipe.id}`}>
            <img className="image" src={recipe.image} alt="waiting" />
          </Link>
          <h2 className="title">{recipe.name}</h2>
          <Link to="/homepage">
            <ArrowCircleLeftIcon
              fontSize="large"
              style={{
                color: "black",
              }}
            />
          </Link>
        </div> */
      );
    });

  return (
    <>
      <div className="searchContainer">
        <div className="searchBar-wrap">
          <SearchIcon className="searchBar-icon" />
          <input type="text" placeholder="Momo" onChange={inputHandler} />
        </div>

        {/* <FormControl className="filter">
          <FormLabel id="demo-row-radio-buttons-group-label">Cuisine</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel
              value="italian"
              control={<Radio />}
              label="Italian"
            />
            <FormControlLabel
              value="american"
              control={<Radio />}
              label="American"
            />
            <FormControlLabel
              value="mexican"
              control={<Radio />}
              label="Mexican"
            />
            <FormControlLabel
              value="chinese"
              control={<Radio />}
              label="Chinese"
            />
            <FormControlLabel
              value="nigerian"
              control={<Radio />}
              label="Nigerian"
            />
          </RadioGroup>
        </FormControl> */}
      </div>
      <div className="parentCard">{checker}</div>
    </>
  );
};

export default RecipeSearch;

{
  /* <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#e0dfdc",
              padding: "10px 10px",
              fontSize: "10px",
              color: "black",
            }}
          >
            Details
          </Button> */
}
