import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import AddRecipe from "./components/AddRecipe/NewRecipeForm";
import Contact from "./components/Contact";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";
import NewRecipeForm from "./components/AddRecipe/NewRecipeForm";

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
        <Route path="/add-recipe">
          <NewRecipeForm />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
