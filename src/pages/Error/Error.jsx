import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";

import "./Error.css";
import SpongebobLost from "./SpongebobLost.webp";

import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <Navbar />
      <Heading headerText="Not Found" />
      <div className="error-page-content">
        <div>
          <img
            src={SpongebobLost}
            width={"200px"}
            alt="That's us trying to figure out what you're asking for"
          />
          <h1>You seem lost</h1>
          <h2>The content you requested could not be found</h2>
          <p>Try double checking the URL for any errors</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
