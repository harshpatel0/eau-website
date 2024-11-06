import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>Expressive Arts Union</h1>
        <div className="footer-contact-us">
          <h2>Contact us</h2>
          <p>
            Follow our{" "}
            <a href="http://instagram.com/expressiveartsunion">Instagram</a>
          </p>
          <p>
            Send us an email at{" "}
            <a href="mailto:expressiveartsunion@gmail.com">
              expressiveartsunion@gmail.com
            </a>
          </p>
          <p>
            View the site's source code on{" "}
            <a href="http://github.com/harshpatel0/react-site">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
