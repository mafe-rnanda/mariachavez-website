import "./Landing_intro.scss";

export default function Homepage() {
  return (
    <div id="landing-section">
      <p class="intro-text">Hello!<br/>
        My name is Maria Chavez. <br/>
        I am a full-stack web developer based in Canada. <br/>
        More <a>about me</a>.</p>
      <div class="intro-portrait placeholder-pic"></div>
      <div class="intro-portrait rectangle"></div>
      {/* <div class="intro-portrait">
      </div> */}
      {/* <div class="intro-header"> */}
      {/* </div> */}
      <h1 class="intro-header name">MARIA CHAVEZ</h1>
      <h3 class="intro-header job">Full Stack Web Developer</h3>
      <p class="brief-description">I seek to create efficient, aesthetic and fun websites that solves user problems through effective solutions, blah blah blah....</p>
    </div>
  );
}
