import classes from './Homepage.module.css'
import SlideShow1 from './SlideShow1';
import ReviewSection from './ReviewSection';
import { useState } from "react"


const Homepage = () => {
    const[comments, setComments] = useState('')
    
    const addComment = ({newComment}) =>{
        setComments([...comments, newComment])
        console.log(comments)
        
    }




    return (
        <>
        <div className={classes.border}>
            <SlideShow1/>

        </div>
        <div>
            <ReviewSection addComment = {addComment}/>
        </div>
        </>
    )
}
export default Homepage;