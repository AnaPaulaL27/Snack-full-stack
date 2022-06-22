import "./App.css";
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

function App() {
  
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
        </Route>
        <Route path="/find-recipe/:recipeId">
          <RecipeRealList />
        </Route>
        <Route path="/add-recipe">
          <RecipeContainer/>
        </Route>
        <Route path="/account" exact>
          <Account />
        </Route>
        <Route path="/account/createAccount">
          <CreateAccount />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
