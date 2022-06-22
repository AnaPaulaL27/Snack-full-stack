import React from 'react'

function RandomFacts() {

    const state = {
        count: 0 
    }
    
    const handleReadMore = () => {
         const btn = document.querySelector('#readMore');

        if(state.count==0){
        btn.innerText = "...Loading facts";
        btn.style.color="black";
        btn.style.backgroundColor="cream";

            } else if (state.count == 1){
                btn.innerText = "just a few more seconds..."

            } else if (state.count == 2){
                btn.innerText = `You've clicked me ${state.count } times...`;
                btn.style.backgroundColor="";
                
            }else if (state.count > 1 ){
                alert("Why not check out our lovely recipes whilst you wait...");

            }
            state.count++; 
    }


  return (
<div id="random-facts">

<div className="random-facts-container">

        <h1 id='facts'> Interesting Facts</h1>

        <ul className='list'>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia n.  adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quian  adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia n</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquamLorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. </li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam  </li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam Lorem ipsum 
            dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam </li>      
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia n.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquamLorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam .</li>              
        </ul>

    </div>

    <button id="readMore" onClick={handleReadMore}> Read more</button>


</div>
  )
}

export default RandomFacts;