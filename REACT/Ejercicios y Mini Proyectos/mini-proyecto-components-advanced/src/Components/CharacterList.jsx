/* eslint-disable react/prop-types */
import "./CharacterList.css";
import { ItemList } from "./ItemList";

export const CharacterList = ({ data }) => {
  return (
    <ul>
      {data.map(
        (item) =>
          item.status === "Alive" && (
            <ItemList
              src={item.image}
              name={item.name}
              status={item.status}
              origin={item.origin.name}
              key={item.id}
            />
          )
      )}
    </ul>
  );
};
