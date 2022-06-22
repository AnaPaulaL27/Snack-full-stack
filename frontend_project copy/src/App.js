import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Navbar/Layout";
import RecipeListContainer from "./components/FindRecipe/RecipeListContainer";
import RecipeContainer from "./components/AddRecipe/RecipeContainer";
import Recipe from "./components/AddRecipe/RecipeForm";
import FooterBar from "./components/Footer/FooterBar";
// import RatingsReviews from "./components/RatingsReviews/RatingsReviews";
import SignInPage from "./components/SigninPage";
import SignUpPage from "./components/SignUpPage";
import AboutUs from "./components/About/AboutUs";


function App() {
  
  return (
    <>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
          {/* <RatingsReviews /> */}
        </Route>
        <Route path="/homepage" exact>
          <Homepage />
        </Route>
        <Route path="/find-recipes">
          <RecipeListContainer />
        </Route>
        <Route path="/find-recipe/:recipeId">
          <Recipe />
        </Route>
        <Route path="/add-recipe">
          <RecipeContainer/>
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path ="/signIn">
          <SignInPage/>
          
        </Route>
        <Route path ="/signUp">
          <SignUpPage/>
          
        </Route>
      </Switch>
    </Layout>
  
  <FooterBar />
</>
  );
}

export default App;
