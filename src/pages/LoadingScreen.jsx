import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";

function LoadingScreenTest() {
  return (
    <>
      <Navbar />
      <Heading headerText="Loading Screen Test" />
      <LoadingScreen done={true} />

      <h1>OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h1>
    </>
  );
}

export default LoadingScreenTest;
