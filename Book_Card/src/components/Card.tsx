import React from 'react'
import image1 from '../images/Vectorclock.png';
import image2 from '../images/Vector.png';
import image3 from '../images/hamburger.png';
import image4 from '../images/Rectangle 7.png';
import "./atoms/Card.css";
function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <div className="rectangle">
          <div className="image">
          </div>
        </div>
      </div>
      <div className="book-details">
        <p id={"book-title"} > Beyond Enterpreneurship</p>
        <div><p id={"author-name"}>Jim Collins and Bill Lazier</p></div>
        <div className="duration">
          <div className="vector">
            <img src={image1} alt="clock"></img>
          </div>

          <div className="time">
            <p>13-minute read</p>
          </div>
        </div>
        
	<br></br>
	<br></br>

      </div>
      <div className="hamburger">
        <img src={image3} alt="hamburger"></img>
      </div>
      <div className="bottom">
        <img src={image4} alt="bottom"></img>

      </div>
    </div>

  )
}



export default Card

