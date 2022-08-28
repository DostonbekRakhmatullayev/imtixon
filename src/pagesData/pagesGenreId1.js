import "./pagesGenreld1.scss";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UseAuth } from "../hook/UseAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemContext";

export const PagesGenreld1 = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const [data, setData] = useState();
  const { token } = UseAuth();
  const [books, setBooks] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/authorId/${params.id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/1`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PagesGenreld className={theme}>
        <Container>
          <div className="d-flex">
            <div>
              <img
                className="pagesGenreld1__img"
                src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                width={382}
                height={400}
                alt=""
              />
              <div className="mx-4 mt-3">
                <div>
                  <strong>Tavallud sanasi </strong>
                  <strong className="data_of_birth">
                    {" "}
                    {data?.date_of_birth}
                  </strong>
                </div>
                <div>
                  <strong>Olamdan ko'z yumgan sanasi </strong>
                  <strong className="data_of_birth">
                    {" "}
                    {data?.date_of_death}
                  </strong>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-5">
                <div className="d-flex">
                  <h4 className="first__nme">{data?.first_name}</h4>
                  <h4 className="first__nme">-{data?.last_name}</h4>
                </div>
                <p className="w-75 ">{data?.bio}</p>
                <h4 className="genreld__country">
                  {data?.country}:{" "}
                  <span className="genreld__spam">to'ilgan</span>
                </h4>
              </div>
              <ul className="genreld__list">
                {books.length &&
                  books.map((e) => (
                    <li className="genreld__item">
                      <Link to="/Nasr">
                        <img
                          src={`https://book-service-layer.herokuapp.com/${e.image}`}
                          width={200}
                          height={240}
                          alt=""
                        />
                      </Link>
                      <p className="text-warning">{e.title}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Container>
      </PagesGenreld>
    </>
  );
};

const PagesGenreld = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  height: 86%;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
