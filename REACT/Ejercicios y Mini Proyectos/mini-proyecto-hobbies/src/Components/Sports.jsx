import "./Sports.css";
import { hobbies } from "../data/Hobbies";

const Sports = () => {
  const sports = hobbies.sports;

  return (
    <div className="sportsContainer">
      <h2 className="sportsTitle">SPORT</h2>
      <ul className="sportsList">
        {sports.map((sport, index) => (
          <li key={index} className="sportItem">
            <h3>{sport.name}</h3>

            <p>Favorite Team: {sport.favoriteTeam}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sports;
