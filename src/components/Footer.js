import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <h3>MARIA CHAVEZ</h3>
            <div className="footer-links">
                <div className="pages">
                    <p>
                        <a href="/">HOME</a>
                    </p>
                    <p>
                        <a href="/work">WORK</a>
                    </p>

                    <p>
                        <a href="/about">ABOUT</a>
                    </p>

                    <p>
                        <a href="/contact">CONTACT</a>
                    </p>

                </div>
                <div className="social">
                    <p>
                        <a target="_blank" href="https://www.linkedin.com/in/mariachavezm">LinkedIn</a>
                    </p>
                    <p>
                        <a target="_blank" href="https://github.com/mafe-rnanda">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
