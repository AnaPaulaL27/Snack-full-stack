import React from "react"
import { useEffect } from "react";
import { Icon } from '@iconify/react';

const FooterBar = () => {


    useEffect(() => {
        // scrolling to top
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (

        <footer className="footer">
            <div className="container">
            
                <div className="row">
                    <div className="footer-col">
                        
                        <ul>
                        <h4><b>Guide bite</b><Icon icon="la:cookie-bite"></Icon></h4>
                            <li><a href=""></a>About us</li>
                            <li><a href=""></a>Our services</li>
                            <li><a href=""></a>Terms of Use</li>
                            <li><a href=""></a>Editorial Guidelines</li>
                            <li><a href=""></a>Privacy</li>
                        </ul>
                       

                    </ div>
                    <div className="footer-col">
                        
                        <ul>
                        <h4>Locations</h4>
                            <li><a href=""></a>Bright Offices</li>
                            <li><a href=""></a>London</li>
                            <li><a href=""></a>Edinburgh</li>
                            <li><a href=""></a>Manchester</li>
                            <li><a href=""></a>California</li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        
                    <ul>
                        <h4>Get Help</h4>
                        
                            <li><a href="https://www.howtocook.recipes/faq/">FAQ</a></li>
                            <li><a href="">Health Queries</a></li>
                            <li><a href="https://www.immediate.co.uk/complaints-escalation/">Complaints</a></li>
                            <li><a href="http://www.gmail.com/">Email / Call us</a></li>
                            <li><a href="https://policies.google.com/privacy?hl=en-GB"></a></li>
                        </ul>

                    </ div>
                    <div className="footer-links-container">
                        <div className="foot-link-header">
                        <h4>Follow us</h4>
                        </div>

                        <div className="footer-links-container2">
                    <div className="footer-col">
                    <ul>
                        
                        
                       <li><a href="https://www.linkedin.com/in/foodblogs/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=uk"><Icon icon="logos:linkedin-icon" width="20" height="20" />Linkedin</a></li>
                        <li><a href="https://www.instagram.com/love_food/?hl=en"><Icon icon="logos:instagram-icon" width="20" height="20" /> Instagram</a></li>
                        <li><a href="https://www.youtube.com/watch?v=-bo3kr303uk"><Icon icon="logos:youtube-icon" width="20" height="20" /> Youtube</a></li>
                        
                        </ul>

                    </ div>
                    <div className="footer-col">
                    <ul>
                        

                        <li><a href="https://tasty.co/"><Icon icon="logos:blogger"width="20" height="20" /> Blog</a></li>
                        <li><a href="https://en-gb.facebook.com/MyIncredibleRecipes/"><Icon icon="logos:facebook"width="20" height="20" /> Facebook </a></li>
                        <li><a href="https://twitter.com/simplyrecipes?lang=en-GB"><Icon icon="openmoji:twitter" width="20" height="20"/>Twitter</a></li>
                           </ul>

                    </ div>
                    </div>
                    </div>
                 </div>

            </div>
            <div>
                 {/* <p>Site design / logo © 2022 BNTA Inc; user contributions licensed under cc by-sa. rev 2022.6.20.357.
                 Agree to this application's use of cookies and similar technologies to enhance your browsing experience, security, analytics, customization and personalized advertising.
                 Text is available under the Creative BNTA Attribution-ShareAlike License 2.0; additional terms may apply.</p>
                <p>By using this site, you agree to the Terms of Use and Privacy Policy. GuiteBites® is a registered trademark of the BNTA Foundation, Inc., a non-profit organization.</p> */}
            </div>
             <div>
             <center>
                {/*scroll to top on button click */}
                    <button id="scrollToTop"
                        onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }} > ^ Take Me to Top
                    </button>
                </center>
             </div>
       </footer>

    )
}

export default FooterBar;
