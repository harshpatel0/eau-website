import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";

import "./Error.css";
import AnActualError from "./AnActualError.webp";

import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();

  const [errorHeading, setErrorHeading] = useState(
    "It's us, not you, we tried to get the data the server, but the server left us on delivered."
  );
  const [errorMessage, setErrorMessage] = useState(
    "Please try again later, if the issue still persists, send an email to expressiveartsunion@gmail.com with the error details below"
  );

  function determineErrorMessage() {
    if (location.state?.error_code == "ERR_NETWORK") {
      setErrorHeading("We lost connection to the EAU Server");
      setErrorMessage(
        "Please check if you still have an active internet connection before retrying."
      );
    }

    if (location.state?.error_code == "500") {
      setErrorHeading("It's us, not you");
      setErrorMessage(
        `The server encountered an error whilst it was processing your request, please let us know about this error through the email (use the icon on the top right corner) and send over these error details.`
      );
    }
  }

  useEffect(() => {
    determineErrorMessage();
  }, []);

  return (
    <>
      <Navbar />
      <Heading headerText="An Error Occured" />
      <div className="error-page-content">
        <div>
          <img
            src={AnActualError}
            width={"200px"}
            alt="Probably what's going on there."
          />
          <h1>An Error Occured</h1>
          <h2>{errorHeading}</h2>
          <p>{errorMessage}</p>
          <Link to="/">Back to Home</Link>
          {location.state?.error_code == null ? (
            <p>
              Hey, we know you came here illegally, it&#39;s fine, you will
              atleast get to see how errors are displayed here
            </p>
          ) : (
            <div className="error-message">
              <p>Error Code: {location.state?.error_code}</p>
              <p>Error Message: {location.state?.error_message}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
