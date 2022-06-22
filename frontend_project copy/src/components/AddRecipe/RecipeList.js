import RecipeForm from "./RecipeForm";


const RecipeList = ({ recipesForm }) => {
  const recipesComponents = recipesForm.map((recipeForm) => {
    return (
      <>
      <RecipeForm key={recipeForm.id} recipeForm={recipeForm} />
   
      </>
    );
  });

  return <>{recipesComponents}</>;
};

export default RecipeList;

