import React from 'react'
import { Icon } from '@iconify/react';

function RatingsReviews() {
  return (
    <>
        <div className="our-services-page">

<h1 className='our-services-header'>Ratings and Reviews</h1>
<p id="subheader">4.7</p>
<p id="subheader5">out of 5</p>
<p id="subheaderMillion"> 1.6M Ratings</p>
<div>
  
  <img src="./images/starRange.png" alt="Star rating range"/>
</div>

<div className="our-services-container">

    <div className="our-services-left">
        <h1 className="title">Editor's Notes</h1>
        <p className='ratings-reviews'> Sometimes, ordering or heading out to a restaurant just isn't in the cards. Guide Bites
       makes those moments far more memorable by having unique recipes with fresh ingredients </p>

    </div>

    <div className="our-services-center">
      <div className='stars'>
      <Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      </div>
        <h4 className="title">Sammybabbbyyy!!!, 22/01/2022</h4>
        <p className='ratings-reviews'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>


    </div>

    <div className="our-services-right">
    <div className='stars'>
      <Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" /><Icon icon="emojione:star" width="30" height="30" />
      <Icon icon="emojione:star" width="30" height="30" />
      </div>
        <h4 className='title'>Never be without it, 05/05/2022</h4>
        <p className='ratings-reviews'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

    </div>

</div>
</div>
     
    </>


  )
}

export default RatingsReviews;