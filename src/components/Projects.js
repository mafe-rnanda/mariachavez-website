import { useState } from "react";
import "./Projects.scss";
import arrow from '../assets/arrowRight.svg';
import more from '../assets/moreIcon.svg';

export default function Work(props) {
  return (
    <div>
      <div className="grid skills">
        <h1 class="header">MY SKILLS</h1>
        <div>Javascript, HTML/CSS, SQL, Ruby, Python</div>
        <div>Spoken Languages: English, Spanish, French</div>
      </div>
      
      <div id="projects" className="grid">
      <h1 class="header">PROJECTS</h1>

      <div class="project-container">
        <div class="number">01</div>
        <div class="project-name">PROJECT NAME</div>
        <img src={more} className="showMore" />
        <div className="divider"></div>
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

