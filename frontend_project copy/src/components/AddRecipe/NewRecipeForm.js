import {useState} from "react";

const NewRecipeForm = ({postRecipe, ingredients}) => {


    // const ingredientOptions = ingredients.map(ingredient => {
    //     return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
        
    //   })

const[stateRecipe, setStateRecipe]= useState(
    {
        name: "",
        prepTime: 0,
        cookTime: 0,
        portionSize: 0,
        cuisine: "",
        measurements: null,
        equipments: null,
    }
)
const handleChange = (event) => {
    console.log(event.target.value);
    let propertyName = event.target.name;
    let copiedRecipe ={...stateRecipe}
    copiedRecipe[propertyName] = event.target.value;
    setStateRecipe(copiedRecipe)
}
//-- handlecuisine
// const handleCuisine =(event) => {
//     const recipeId = parseInt(event.target.value);
//     const selectedCuisine = recipes.find(recipe => recipe.id === recipeId)
//     let copiedRecipe ={...stateRecipe};
//     copiedRecipe.recipe = selectedCuisine;
//     setStateRecipe(copiedRecipe);
// }
const handleFormSubmit= (event) => {
    event.preventDefault();
    const submittable = JSON.parse(JSON.stringify(stateRecipe));
    submittable.equipments=submittable.equipments.split(",");
    submittable.measurements=submittable.measurements.split(",");
    postRecipe(submittable);
    alert("Great choice! Recipe has been added");
}




 
const handleIngredient = (event) => {
      const ingredientId = parseInt(event.target.value);
      const selectedIngredient = ingredients.find(ingredient => ingredient.id === ingredientId)
      let copiedRecipe = {...stateRecipe}
      copiedRecipe.ingredient = selectedIngredient
      setStateRecipe(copiedRecipe);
  }
  
return(
        <form onSubmit={handleFormSubmit}>
           <h3>Add a new recipe</h3>
           <div>
                <label>Recipe Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={stateRecipe.name}
            />
            </div>
            <div>
                <label>Prep Time: </label>
                <input
                type="text"
                name="prepTime"
                onChange={handleChange}
                value={stateRecipe.prepTime}
                />
            </div>
            <div>
                    <label>Cook Time: </label>
                    <input
                    type="text"
                    name="cookTime"
                    onChange={handleChange}
                    value={stateRecipe.cookTime}
                    />
            </div>
            <div>
                <label>Portion Size: </label>
                <input
                type="text"
                name="portionSize"
                onChange={handleChange}
                value={stateRecipe.portionSize}
                />
            </div>

            <div>
                <label> Select Cusine: </label>
            <select >
            
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
          </select>
            </div>


{/* <select name="ingredient" onChange={handleIngredient}>
        <option>Select an ingredient</option>
        {ingredientOptions}
      </select> */}
         
           
            
            <div>
                <label>Equipments: </label>
                <input
                type="text"
                name="equipments"
                onChange={handleChange}
                value={stateRecipe.equipments}
                />
            </div>
            <div>
                <label>Measurements: </label>
                <input
                type="text"
                name="measurements"
                onChange={handleChange}
                value={stateRecipe.measurements}
                />
            </div>
{/*
            <select
                name="cuisine"
                onChange={handleCuisine}>
                <option>Select a cuisine</option>
                {cuisineOptions}
            </select> */}
            <button id="add" type="submit">ADD RECIPE</button>
        </form>
    )
}
export default NewRecipeForm;