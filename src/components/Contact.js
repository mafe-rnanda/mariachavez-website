import "./Contact.scss";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="page-header-texts">
        <p>Contact</p>
        {/* <h1 onClick={props.homepage}>MARIA CHAVEZ</h1> */}
        <h1>
          <a href="/">MARIA CHAVEZ</a>
        </h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>WANNA TALK ABOUT IT?</h2>
          <form>
            <input type="text" id="name" placeholder="Name"></input>
            <input type="email" id="email" placeholder="Email"></input>
            <br></br>
            <input type="text" id="subject" placeholder="Subject"></input>
            <br></br>
            <textarea></textarea>
            <br></br>
            <input type="button" id="send" value="Send"></input>
          </form>
        </div>
        <div className="contact-links">
          <h2>GET IN TOUCH</h2>
          <a target="_blank" href="mailto:mf.chavezminjarez@gmail.com">
            mf.chavezminjarez@gmail.com
          </a>
          <h2>MY RESUME</h2>
          <a
            target="_blank"
            href="https://www.canva.com/design/DAEXG-Os3IM/Qj-PZkwcaEq1LzqG8YrMdg/view?utm_content=DAEXG-Os3IM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          >
            view/download
          </a>
          <h2>FIND ME ON SOCIAL</h2>
          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/in/mariachavezm">
              LinkedIn
            </a>
            <a target="_blank" href="https://github.com/mafe-rnanda">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
