import "./App.css";
import "./components/AddRecipe/addRecipeForm.css";
import "./components/RatingsReviews/ratingsReviews.css";

import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import Contact from "./components/Contact";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";
import RecipeContainer from "./components/AddRecipe/RecipeContainer";
import Recipe from "./components/FindRecipe/Recipe"
import RecipeRealList from "./components/FindRecipe/RecipeRenderedList";
import Account from "./components/Account/Account"
import CreateAccount from "./components/Account/CreateAccount";
import FooterBar from "./components/Footer/FooterBar";
import React, { useState } from "react";
import styles from "./components/Account/App.module.css";


function App() {
  
  const [isOpen, setIsOpen] = useState(false);



  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" exact>
          <Homepage />
        </Route>
        <Route path="/find-recipes">
          <RecipeListContainer />
          <FooterBar />
        </Route>
        <Route path="/find-recipe/:recipeId">
          <RecipeRealList />
          <FooterBar />
        </Route>
        <Route path="/add-recipe">
          <RecipeContainer/>
          <FooterBar />
        </Route>
        <Route path="/account" exact>
          <Account />
          <FooterBar />
        </Route>
        <Route path="/account/createAccount">
          <CreateAccount />
          <FooterBar />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
