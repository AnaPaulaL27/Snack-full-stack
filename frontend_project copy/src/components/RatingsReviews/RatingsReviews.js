import React from 'react'
import { Icon } from '@iconify/react';
import  starRange from '../images/starRange.png';



function ratingsReviews() {
  return (
    <>
<div id="our-services-page">

<h1 className='our-services-header'>Ratings and Reviews</h1>
<h4 id='see-all-button'>See All</h4>

<h1 id="subheader">4.7</h1>
<p id="subheader5">out of 5</p>
<p id="subheaderMillion"> 1.6M Ratings</p>
<div>
<img src={starRange} id='stars-range-image' alt="Star rating range" />
</div>

<div className="ratings-reviews-container">

    <div className="ratings-reviews-left">
        <h1 className="title">Editors' Notes</h1>
        <p className='ratings-reviews'> Sometimes, ordering or heading out to a restaurant just isn't in the cards. Guide Bites
       makes those moments far more memorable by having unique recipes with fresh ingredients.Last year I sat down for lunch at one of the long, butcher paper–lined tables of Trattoria Sostanza in Florence on the recommendation of a trusted friend and restaurateur Lorem ipsum dolor  Tempore natus consectetur modi aspernatur! Nesciun...–  </p>
       <h4 className='more-button'>more </h4>
    </div>

    <div className="ratings-reviews-center">
      <div className='stars'>
      <Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      </div>
        <h4 className="title">Sammybabbbyyy!!!, 22/01/2022</h4>
        <h4 className="title2">Uni student here! App is a lifesaverrrr!</h4>
        <p className='ratings-reviews'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus...</p>
        <h4 className='more-button'>more </h4>

    </div>

    <div className="ratings-reviews-right">
    <div className='stars'>
      <Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      </div>
        <h4 className='title'>Thomas Smith, 05/05/2022</h4>
        <h4 className="title2">Best app out there... You won't go hungry!</h4>

        <p className='ratings-reviews'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus...
    </p>
    <h4 className='more-button'>more </h4>  </div>
</div>
</div>
     
    </>


  )
}

export default ratingsReviews