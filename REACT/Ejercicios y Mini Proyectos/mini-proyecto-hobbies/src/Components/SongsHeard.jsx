import { hobbies } from "../data/Hobbies";
import "./SongsHeard.css";

const SongsHeard = () => {
  const songsHeard = hobbies.songsHeard;
  return (
    <div className="songsHeardContainer">
      <h2 className="songsHeardTitle"> SONGS HEARD </h2>
      <br></br>
      <ul>
        {songsHeard.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongsHeard;
