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
        {/* <a>more details
          <img src={arrow} />
        </a> */}
      </div>

      <div class="project-container">
        <div class="number">02</div>
        <div class="project-name">PROJECT NAME</div>
        <img src={more} className="showMore" />
        <div className="divider"></div>
        {/* <a>more details
          <img src={arrow} />
        </a> */}
      </div>  

      </div>
    </div>
  );
}

