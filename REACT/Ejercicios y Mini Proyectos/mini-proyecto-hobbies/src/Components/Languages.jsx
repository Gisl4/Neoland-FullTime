import { hobbies } from "../data/Hobbies";
import "./Languages.css";

export const Languages = () => {
  const { language, wrlevel, splevel } = hobbies.languages;

  return (
    <div className="languagesContainer">
      <h2 className="languagesTitle"> LANGUAGES </h2>
      <ul className="languagesInfo">
        <div>
          <h3> 🗣️ {language.name}</h3>
          <p>Write level: {wrlevel.wrlevel} </p>
          <p>Speak level: {splevel.splevel} </p>
        </div>
      </ul>
    </div>
  );
};
