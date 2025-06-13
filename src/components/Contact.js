
import React from "react";
function Contact (){
    return(
<div>
    <section className="contact-section">
  <div className="container">
    <div className="row align-items-center g-5">
      
      
      <div className="col-md-6">
        <div className="contact-card">
          <h2>Let's Plan Your Event</h2>
          <form>
            <div className="mb-3">
              <label for="name" classNmae="form-label">Full Name</label>
              <input type="text" classNmae="form-control" id="name" placeholder="Your name" required></input>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Your email" required></input>
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Your contact number" required></input>
            </div>
            <div classNmae="mb-3">
              <label for="eventType" className="form-label">Event Type</label>
              <select className="form-select" id="eventType" required>
                <option selected disabled>Select event type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Your Message</label>
              <textarea classNmae="form-control" id="message" rows="4" placeholder="Share your event ideas..." required></textarea>
            </div>
            <button type="submit" className="btn btn-custom w-100">Submit Request</button>
          </form>
        </div>
      </div>

      
      <div class="col-md-6 text-center">
        {/* <img src="https://images.unsplash.com/photo-1584467735871-52d4b2008e76?fit=crop&w=800&q=80" alt="Event Planning" class="contact-image"></img> */}
      </div>

    </div>
  </div>
</section>
</div>
    )
}
 export default Contact;

