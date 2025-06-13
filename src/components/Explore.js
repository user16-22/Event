import React from "react";

function Explore(){
    return(
        <div>
            <section className="banner text-center">
  <div>
    <h1>About Us</h1>
    <p>Your trusted partner for unforgettable events</p>
  </div>
</section>


<section classNmae="container py-5 about-description">
  <div classNmae="row align-items-center">
    <div classNmae="col-md-6">
      {/* <img src="about-image.jpg" alt="About Image"></img> */}
    </div>
    <div classNmae="col-md-6">
      <h2>Our Journey</h2>
      <p>We are a passionate event management company committed to turning your vision into reality. With years of experience, a creative team, and a dedication to excellence, we curate personalized experiences for weddings, corporate events, private parties, and more. Our mission is to handle all the details so you can focus on celebrating life’s special moments.</p>
    </div>
  </div>
</section>


<section classNmae="bg-light py-5">
  <div className="container text-center">
    <h2 classNmae="mb-4">Why Choose Us</h2>
    <div className="row">
      <div className="col-md-4">
        <h5>Expert Planning</h5>
        <p>We provide end-to-end event planning services tailored to your unique needs.</p>
      </div>
      <div className="col-md-4">
        <h5>Creative Solutions</h5>
        <p>Innovative designs and fresh ideas make your event truly one of a kind.</p>
      </div>
      <div className="col-md-4">
        <h5>Reliable Team</h5>
        <p>Our experienced professionals ensure flawless execution every time.</p>
      </div>
    </div>
  </div>
</section>


<section className="container py-5">
  <h2 className="text-center mb-5">Meet Our Team</h2>
  <div className="row g-4 text-center">
    <div className="col-md-3">
      <div className="team-member">
        {/* <img src="member1.jpg" alt="Team Member 1"></img> */}
        <h5 className="mt-3">Priya Sharma</h5>
        <p>Event Coordinator</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="team-member">
        {/* <img src="member2.jpg" alt="Team Member 2"></img> */}
        <h5 className="mt-3">Rahul Verma</h5>
        <p>Creative Director</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="team-member">
        {/* <img src="member3.jpg" alt="Team Member 3"></img> */}
        <h5 className="mt-3">Anjali Mehta</h5>
        <p>Client Manager</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="team-member">
        {/* <img src="member4.jpg" alt="Team Member 4"></img> */}
        <h5 className="mt-3">Karan Patel</h5>
        <p>Technical Head</p>
      </div>
    </div>
  </div>
  </section>
        </div>
    )
        

    
}
export default Explore;