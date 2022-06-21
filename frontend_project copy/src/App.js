import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import AddRecipe from "./components/AddRecipe/NewRecipeForm";
import Contact from "./components/Contact";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";
import NewRecipeForm from "./components/AddRecipe/NewRecipeForm";
import RecipeContainer from "./components/AddRecipe/RecipeContainer";
import SlideShow1 from './components/SlideShow1';


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
          <RecipeContainer/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
