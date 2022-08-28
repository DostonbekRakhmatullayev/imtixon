import "./TemuriylarBook.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemContext";

export const TemuriylarBook = () => {
  const [books, setBooks] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/1`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="books__list">
          {books.length &&
            books.map((e) => (
              <li className={`books__item ${theme}`}>
                <Link to={`/book/${e.id}`}>
                  <img
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={245}
                    height={286}
                    alt=""
                  />
                </Link>
                <Books__title>{e.title}</Books__title>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const Books__title = styled.h4`
margin-top: 15px;
margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #c9ac8c;
`;
