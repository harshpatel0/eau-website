import { DarkModeContext } from "../../contexts/DarkModeContext";
import { useContext } from "react";

import "./Footer.css";

import "./../../veryglobalvars.js";
import { websiteUrl } from "./../../veryglobalvars.js";

function Footer() {
  const { darkMode, _ } = useContext(DarkModeContext);

  return (
    <>
      <footer
        style={{ backgroundColor: darkMode ? "#282828" : "#D3D3D3" }}
        className="footer no-print"
      >
        <div className="footer-content">
          <h1>Expressive Arts Union</h1>
          <div className="footer-contact-us">
            <h2>Contact us</h2>
            <p>
              Follow our{" "}
              <a
                target="_blank"
                href="http://instagram.com/expressiveartsunion"
              >
                Instagram
              </a>
            </p>
            <p>
              Send us an email at{" "}
              <a href="mailto:expressiveartsunion@gmail.com">
                expressiveartsunion@gmail.com
              </a>
            </p>
            <p>
              View the site's source code on{" "}
              <a
                target="_blank"
                href="http://github.com/harshpatel0/eau-website"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Printing Footer */}
      <footer
        style={{ backgroundColor: darkMode ? "#282828" : "#D3D3D3" }}
        className="footer"
      >
        <div style={{ display: "none" }} className="printing-footer-content">
          <h3>Printed from The Union Dispatch</h3>
          <h4>The Expressive Arts Union</h4>
          {/* <a href={websiteUrl}>{websiteUrl}</a> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
