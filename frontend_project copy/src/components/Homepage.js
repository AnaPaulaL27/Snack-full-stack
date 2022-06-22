import classes from './Homepage.module.css'
import SlideShow1 from './SlideShow1';
import ReviewSection from './ReviewSection';
import { useState } from "react"
import RatingsReviews from "./RatingsReviews/RatingsReviews";
import RandomFacts from "./RandomFacts/RandomFacts";
import FooterBar from './Footer/FooterBar'



const Homepage = () => {
    const[comments, setComments] = useState('')
    
    const addComment = ({newComment}) =>{
        setComments([...comments, newComment])
        console.log(comments)
        
    }




    return (
        <>
        <h2 className='slideshow-header'> 
Recipes You'll Love</h2>
        <div >
            <SlideShow1/>

        </div>
        {/* <div>
        <RandomFacts />
        </div> */}
        <div><br/><br/>
        <RatingsReviews />
        </div>
        <div>
            {/* <ReviewSection addComment = {addComment}/> */}
            <FooterBar />
        </div>
      
        </>
    )
}
export default Homepage;