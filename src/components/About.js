import "./About.scss";
import profilePicture from "../assets/Maria_Chavez.jpeg";

export default function About(props) {
  return (
    <div id="about-section">
      <h1 className="header">ABOUT ME</h1>
      <h2 class="sub-header-name">MARIA CHAVEZ</h2>
      <h3 class="sub-header-job">Full Stack Web Developer</h3>

      <img class="placeholder-pic" src={profilePicture}/>
      <div class="rectangle"></div>

      <div className="about-highlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
      
      <p class="about-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      {/* <div className="grid skills">
        <h1 class="header">MY SKILLS</h1>
        <div>Javascript, HTML/CSS, SQL, Ruby, Python</div>
        <div>Spoken Languages: English, Spanish, French</div>
      </div> */}
    </div>
  );
}
