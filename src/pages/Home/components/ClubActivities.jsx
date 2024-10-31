import { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkModeContext";

function ClubActivities(props) {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <div className="activities">
        {/* {<CassetteTape className="activities-icon" weight="fill" size={64} />} */}
        {props.iconComponent}
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default ClubActivities;

// {          <div className="activities">
//   <CassetteTape className="activities-icon" weight="fill" size={64} />
//   <h3>Music</h3>
//   <p>
//     The beat of your heart, the snap of your thumb the sound of the wind, the
//     hallow in your speech listen and relate, rhythm and lyric date. From the
//     artistry of rap to the cadence of pop, this category offers you the chance
//     to compose music, analyze lyrics, and explore the messages conveyed through
//     music from the 19th century to the 21st century.
//   </p>
// </div>;}
