import "./About.scss";

export default function About(props) {
  return (
    <div id="about-section">
      <h1 className="header">ABOUT ME</h1>
      <div className="introduction highlight-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. I'm 33 years old, </div>
      <div className="introduction about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      <div className="about-picture-background"></div>
      <div className="about-picture"></div>
    </div>
  );
}
