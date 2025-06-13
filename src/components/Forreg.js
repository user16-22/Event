import React from "react";

function Forreg(){
 return(
    <div>
        <div className="banner">
  <h1>Book Your Event Now</h1>
</div>


<div className="form-section">
  <form className="form-container" id="loginForm">
    <h4>Login</h4>
    <input type="text" className="form-control mb-2" placeholder="Username" required ></input>
    <input type="password" className="form-control mb-2" placeholder="Password" required></input>
    <button type="submit" className="btn btn-primary w-100">Login</button>
  </form>

  <form className="form-container" id="registerForm">
    <h4>Register</h4>
    <input type="text" className="form-control mb-2" placeholder="Username" required></input>
    <input type="email" className="form-control mb-2" placeholder="Email" required></input>
    <input type="password" className="form-control mb-2" placeholder="Create Password" required></input>
    <input type="password" className="form-control mb-2" placeholder="Confirm Password" required></input>
    <input type="tel" className="form-control mb-2" placeholder="Mobile Number" required></input>
    <input type="text" className="form-control mb-2" placeholder="Location" required></input>
    <button type="submit" className="btn btn-success w-100">Sign Up</button>
  </form>
</div>



</div>

  
 )
}
export default Forreg;
