import "./About.scss";
import profilePicture from "../assets/Maria_Chavez.jpeg";
import LinearProgress from '@mui/material/LinearProgress';

export default function About(props) {
  return (
    <div id="about-section">
      <h1 className="header">ABOUT ME</h1>
      <h2 class="sub-header-name">MARIA CHAVEZ</h2>
      <h3 class="sub-header-job">Full Stack Web Developer</h3>

      <img class="placeholder-pic" src={profilePicture}/>
      <div class="rectangle"></div>

      <div className="about-highlight">I enjoy creating sleek websites that solve user problems through effective and proven soutions. Trying to stay updated with the newest trends and challenge myself to keep learning. </div>
      
      <p class="about-summary">I have always been interested in coding but it was until 2018 that I decided to pursue it as a full-time career. I started slowly by learining with free online courses. Got a job where I could build registration websites for corporate events even though I could only do so much with pre-built templates. In 2021 I completed a Full-Stack Web Development bootcamp and I am now looking to collaborare in real and exciting projects.</p>

      <h1 className="header my-skills">MY SKILLS</h1>
      <h2 className="sub-header-skills">Programming Languages:</h2>
      <p className="skill">Javascript</p>
      <LinearProgress variant="determinate" value={90} className="skill-level" />
      <p className="skill">HTML/CSS</p>
      <LinearProgress variant="determinate" value={100} className="skill-level" />
      <p className="skill">SQL</p>
      <LinearProgress variant="determinate" value={70} className="skill-level" />
      <p className="skill">Ruby</p>
      <LinearProgress variant="determinate" value={40} className="skill-level" />
      <h2 className="sub-header-spoken-languages">Spoken Languages:</h2>
      <p className="spoken-languages">
        English<br/>
        Spanish<br/>
        French
      </p>
      <h2 className="sub-header-other-skills">Frameworks, libraries, databases & testing:</h2>
      <p className="other-skills">
        React, Axios, Express, Ajax, Rails, EJS, JQuery, Bootstrap, SASS, Material UI , JWT, Stripe, PostgreSQL, MongoDB, Storybook, Jest, Cypress, Mocha & Chai, Rspec, Capybara
      </p>
     
    </div>
  );
}
