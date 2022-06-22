import React from 'react'
import Prawn from '../images/Juicy-prawn.jpeg';
import lasagna from '../images/lasagna.png';
import chicken from '../images/chicken.jpeg';
import { Icon } from '@iconify/react';


function AboutUs() {
  return (
    <div className="about-us-page">

    <h1 className='about-us-header'>Guide Bite<Icon icon="la:cookie-bite" width="30" height="30" /></h1>
    <h3 className="subheader">About us</h3>

    <div className="about-us-container">

    <div className="about-us-left">
            <img src={lasagna} className='lasagna-image' />
            <img src={chicken} className='carne-image' />
            <img src={Prawn} className='prawn-image' />

            <h4 className='slogan-tag'>Bringing you the tastiest and easiest-to-make recipes to your table this summer!</h4>
        </div>
 
        <div className="about-us-right">
            <h3 className="who-are-we">So...who are we? What is Guide bite?</h3>

            <p className='about-info'> We are Guide Bite— The best food app that allows you to explore our huge selection of delicious recipe ideas including; easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

            <div className="center">
                <h4 className="color-highlight"> Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</h4>
            </div>

            <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>

            <h4 className="color-highlight"> Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis.</h4>

            <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>
            
            <h4 className="color-highlight"> Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis.</h4>

                <p className='about-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus consectetur modi aspernatur! Nesciunt, quia numquam. Consectetur deleniti vero provident voluptates, aspernatur in reiciendis voluptate corporis optio possimus, ipsam delectus.</p>
        
        </div>

    </div>
</div>

)
}
 

export default AboutUs;