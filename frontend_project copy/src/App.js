import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import AddRecipe from "./components/AddRecipe";
import Contact from "./components/Contact";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";

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
          <AddRecipe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
