import { useParams } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const params = useParams();

  return (
    <>
      <h1>Hello</h1>
      <div className="card">
        <h2 className="title">{console.log(recipe)}</h2>
        {/* <img className="image" src={recipe.image} alt="waiting" /> */}
      </div>
    </>
  );
};

export default Recipe;
