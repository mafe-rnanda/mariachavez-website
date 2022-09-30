import "./Landing_intro.scss";

export default function Homepage() {
  return (
    <div id="landing-section">
      <p class="intro-text">Hello!<br/>
        My name is Maria Chavez. <br/>
        I am a full-stack web developer based in Canada. <br/>
        More <a>about me</a>.</p>
      <div class="intro-portrait">
        <div class="placeholder-pic"></div>
        <div class="rectangle"></div>
      </div>
      <div class="intro-header">
        <h3>Full Stack Web Developer</h3>
        <h1>MARIA CHAVEZ</h1>
      </div>
      <p class="brief-description">I seek to create efficient, aesthetic and fun websites that solves user problems through effective solutions, blah blah blah....</p>
    </div>
  );
}
