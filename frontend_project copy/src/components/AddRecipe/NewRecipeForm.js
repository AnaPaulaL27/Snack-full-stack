import { useEffect, useState } from "react";
import signInImage from '../images/signinImage.png'


const NewRecipeForm = ({ postRecipe, ingredients, equipments, measurements }) => {



    const ingredientOptions = ingredients.map(ingredient => {
        return (<option key={ingredient.id} value={ingredient.name}> {ingredient.name} </option>)
    })

    const equipmentsOptions = equipments.map(equipment => {
        return (<option key={equipment.id} value={equipment.name}> {equipment.name} </option>)
    })
    
    const measurementOptions = measurements.map(measurement => {
        return (<option key={measurement.id} value={measurement.ingredientAmount}> {measurement.ingredientAmount} </option>)
    })



    const [stateRecipe, setStateRecipe] = useState(
        {
            name: "",
            prepTime: 0,
            cookTime: 0,
            portionSize: 0,
            cuisine: "",
            image: "",
            measurements: [],
            equipments: [],
            users: [],
        }
    )
    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedRecipe = { ...stateRecipe }
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



    const handleFormSubmit = (event) => {
        event.preventDefault();
        const submittable = JSON.parse(JSON.stringify(stateRecipe));

        // submittable.equipments = submittable.equipments.split(",");
        // submittable.measurements = submittable.measurements.split(",");
        postRecipe(submittable);
        alert("Great choice! Recipe has been added");
    }

    // const handleIngredient = (event) => {
    //     const name = (event.target.value);
    //     const selectedIngredient = ingredients.find(ingredient => ingredient.name === name)
    //     const selectedIngredientId = selectedIngredient.id
    //     let copiedRecipe = { ...stateRecipe }
    //     copiedRecipe.ingredient = selectedIngredient
    //     setStateRecipe(copiedRecipe);
    //     console.log(selectedIngredient)
    // }

  

    const handleEquipment = (event) => {
        const EquipmentName = (event.target.value);
        const selectedEquipment = equipments.find(equipment => equipment.name === EquipmentName)
        let copiedRecipe = { ...stateRecipe }
        copiedRecipe.equipments = [...copiedRecipe.equipments, selectedEquipment]
        setStateRecipe(copiedRecipe);
        // console.log(selectedEquipment)
    }



    const handleMeasurement = (event) => {

        const MeasurementAmount = (event.target.value);
        const selectedMeasurement = measurements.find(measurement => measurement.ingredientAmount === MeasurementAmount)
        let copiedRecipe = { ...stateRecipe }
        copiedRecipe.measurements = [...copiedRecipe.measurements, selectedMeasurement]
        setStateRecipe(copiedRecipe);
        // console.log(selectedMeasurement)
    }

    const handleCusine = (event) => {
        const selectedCuisine = event.target.value;
        let copiedRecipe = {...stateRecipe}
        copiedRecipe.cuisine = selectedCuisine
        setStateRecipe(copiedRecipe)
        // console.log(selectedCuisine)
    }




    return (
<>
        <h2 className="addRecipeHeading">Share Delicious Recipes</h2>
        <p className="addRecipe-p">a resource for food-lovers!</p>
        <div className="form-container">
        <div className="addrecipe-img-container">
         <img className= "signin-img"src={signInImage}/>
     </div>
 <form className ="addrecipe-form" onSubmit={handleFormSubmit}>
     <h3 className="header-text">Add a new recipe</h3>
     <label>Title </label>
     <div>
         <input
             type="text"
             name="name"
             onChange={handleChange}
             value={stateRecipe.name}
         />
     </div>

     <label>Prep Time </label>
     <div>
        
         <input
             type="text"
             name="prepTime"
             onChange={handleChange}
             value={stateRecipe.prepTime}
         />
     </div>

     <label>Cook Time </label>
     <div>
         <input
             type="text"
             name="cookTime"
             onChange={handleChange}
             value={stateRecipe.cookTime}
         />
     </div>

     <label>Portion Size </label>
     <div> 
         <input
             type="text"
             name="portionSize"
             onChange={handleChange}
             value={stateRecipe.portionSize}
         />
     </div>
     <label> Select Cusine </label>
     <div>
         
         <select onChange={handleCusine}>

             <option value="AMERICAN">AMERICAN</option>
             <option value="SPANISH">SPANISH</option>
             <option value="MEDITERRANEAN">MEDITERRANEAN</option>
             <option value="GREEK">GREEK</option>
             <option value="NIGERIAN">NIGERIAN</option>
             <option value="MEXICAN">MEXICAN</option>
             <option value="CHINESE">CHINESE</option>
             <option value="TURKISH">TURKISH</option>
             <option value="IRANIAN">IRANIAN</option>
         </select>
     </div>

     <div>
         <label>Image source </label>
         <input
             type="text"
             name="image"
             onChange={handleChange}
             value={stateRecipe.image}
         />
     </div>

     <div>
     <label>Select an ingredient </label>
         <select name="ingredient" >
             <option>Ingredients</option>
             {ingredientOptions}
         </select>

         <label> amount: </label>
         <select name="measurement" onChange={handleMeasurement}>
         <option>Measurements</option>
         {measurementOptions}
     </select>
     </div>


     <div> 
     <label>Select equipments: </label>
         <select name="equipment" onChange={handleEquipment}>
         <option> Equipments</option>
         {equipmentsOptions}
     </select>
     </div>
     <label>Description: </label>
     <div>
         
         <input className="description"
             type="text"
             name="description"
             // onChange={handleChange}
             // value={stateRecipe.image}
         />
     </div>

     <div>
         </div>



     {/*
     <select
         name="cuisine"
         onChange={handleCuisine}>
         <option>Select a cuisine</option>
         {cuisineOptions}
     </select> */}
     <button className="button" id="add" type="submit">ADD RECIPE</button>
 </form>
 </div>
 </>
    )
}
export default NewRecipeForm;