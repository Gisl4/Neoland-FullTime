/* eslint-disable react/prop-types */
import { CharacterList } from "../Components";
import "./Characters.css";

export const Characters = ({ data }) => {
  return (
    <div id="characterPage">
      <CharacterList data={data} />
    </div>
  );
};
