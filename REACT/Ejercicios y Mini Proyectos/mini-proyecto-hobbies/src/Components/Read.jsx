import "./Read.css";
import { hobbies } from "../data/Hobbies";

export const Read = () => {
  const {
    title,
    authorName,
    authorSurname,
    gender,
    dateOfPublication,
    authorBirthDate,
    bookImage,
    otherBooks,
  } = hobbies.read;

  return (
    <div className="readContainer">
      <h2 className="readTitle"> READ </h2>
      <div className="bookInfo">
        <img src={bookImage} alt={title} className="bookImage" />
        <div className="bookDetails">
          <h3>{title}</h3>
          <p>
            <strong>Author:</strong> {authorName} {authorSurname}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Date of Publication:</strong> {dateOfPublication}
          </p>
          <p>
            <strong>Authors Birth Date:</strong> {authorBirthDate}
          </p>
        </div>
      </div>
      <div className="otherBooks">
        <h3 className="otherBooksTitle"> Other Books</h3>
        <ul className="otherBooksList">
          {otherBooks.map((book, index) => (
            <li key={index} className="otherBooksItem">
              {book.info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
