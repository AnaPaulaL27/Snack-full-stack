import { useParams } from "react-router-dom";

const RecipeForm = ({ recipeForm }) => {
  const params = useParams();

  return (
    <>
      <div className="card">
        <h2 className="title">{console.log(recipeForm)}</h2>
        {/* <img className="image" src={recipe.image} alt="waiting" /> */}
      </div>
    </>
  );
};

export default RecipeForm;
