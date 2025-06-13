import images from '../images/Abt.jpg'
import React from 'react';

function Home(){
    return(
     <div>
      <div className="hero">
  <div className="overlay"></div>
  <div className="hero-text">
    <h1>Unforgettable Moments Start Here</h1>
    <p>From concept to celebration, we bring your vision to life.</p>
  </div>
  </div>

{/* ABOUT */}
  
  <section className="about-section py-5" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h6>About us</h6>
          <h1>About Our Events</h1>
          <h2>Crafting Experiences, Not Just Events</h2>
          <p>We specialize in creating stunning and stress-free events that leave lasting impressions. From personal celebrations to professional functions, we’ve got it covered.</p>
          <a href="#services" className="btn btn-primary">Explore Services</a>
        </div>
        <div className="col-md-6">
          <img src={images} alt="About Us"></img>
        </div>
      </div>
    </div>
  </section>




     </div>   

   
  
        
    )
}
export default Home;