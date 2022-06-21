import { NavLink } from "react-router-dom";
import { useState } from "react";

const ReviewSection = ({addReview}) => {

    const[newReview, setNewReview] = useState()

    function onSubmit(event){
        event.preventDefault()

        if(!newReview){
            alert("please add task")
        }
        console.log(newReview)

        addReview({newReview})

        setNewReview('')
    }

    const handleTextInput = (e) => {
        setNewReview( e.target.value)
    }



    return(
        <div className="reviewContainer">
            <h3>Rate your Experience</h3>
            <div className="starsContailer">
                
            </div>
            <form className="form" onSubmit={onSubmit}>
                    <label>
                        Comment:
                        <input className="commentInputBox"
                         type="text"
                        name="review" 
                        value ={newReview}
                        onChange = {handleTextInput}/>
                    </label>

                    <button type ="submit">Submit</button>
                    </form>


        </div>

    )
}

export default ReviewSection;