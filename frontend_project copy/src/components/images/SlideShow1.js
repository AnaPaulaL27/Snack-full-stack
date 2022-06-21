import { useState, useEffect, useRef } from "react";
import recipe1 from './images/recipe1.jpeg'
import recipe2 from './images/recipe2.jpeg'
import recipe3 from './images/recipe3.jpeg'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];


const images = [recipe1, recipe2, recipe3];
const delay = 2500;

  
  function SlideShow1() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
             <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
              <img className ="slideShow_img" src = {image}/>
             
          </div>
          
        ))}
      </div>
  
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  export default SlideShow1