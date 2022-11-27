import { useState } from "react";
import "./Projects.scss";
import arrow from '../assets/arrowRight.svg';
import more from '../assets/moreIcon.svg';
import helpBook1 from '../assets/helpBook/App_Dashboard.gif';
import helpBook2 from '../assets/helpBook/Landing_Page.png';
import helpBook3 from '../assets/helpBook/Organization_Profile.png';
import helpBook4 from '../assets/helpBook/Donor_Profile.png';


export default function Work(props) {
  const helpBook =[helpBook2,helpBook3,helpBook4,helpBook1]
  let i = 0;
  const timer = 4000;

  const helpBookSlideShow = () => {
    document.slide.src = helpBook[i];
    if (i < helpBook.length -1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout(helpBookSlideShow, timer);
  };

  return (
    <div>
      <div id="projects" className="grid">
      <h1 class="header">PROJECTS</h1>

      <div class="project-container">
        <div class="number">01</div>
        <div class="project-name">HelpBook</div>
        <img src={more} className="showMore" onClick={helpBookSlideShow} />
        <div className="divider"></div>
        <img name="slide" className="slideShow" />
        <p>HelpBook is a SPA (Single Page Application) which provides a platform for people and organizations to request help and users to provide it. On HelpBook donors can make a donation securely and easily and the receivers will have a profile to ask for the help they need, that will be easily accessable to donors. <br /><br/>The App utilizes React built-in and hooks and allows users (donors) to donate and follow users in real time. The app also allow users (receivers) to seamlessly edit, add or remove wishlist items or money goals with a user friendly pattern. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP with axios library, using the JSON format.</p>
      </div>

      
      </div>
    </div>
  );
}

