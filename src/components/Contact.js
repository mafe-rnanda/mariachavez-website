import "./Contact.scss";

export default function Contact(props) {
  return (
    <div id="contact-section">
      <h1 class="header">CONTACT</h1>
      <div>
        <div>INTERESTED IN WORKING TOGETHER?</div>
        <a>Let's get in touch</a>
      </div>
      <div class="email-phone">
        <a href="mailto:mf.chavezminjarez@gmail.com">mf.chavezminjarez@gmail.com</a><br/>
        <a>+1 (604) 836 3823</a>
      </div>
      <a href="https://github.com/mafe-rnanda" target="_blank">GITHUB</a>
      <a href="http://www.linkedin.com/in/mariachavezm" target="_blank">LINKEDIN</a>
      {/* <a href="https://mafe-rnanda.github.io/Resume/" target="_blank">MY RESUME</a> */}
      <a href="https://github.com/mafe-rnanda/Resume/raw/main/MariaChavez_Resume.pdf" target="_blank">MY RESUME</a>
    </div>
  );
}
