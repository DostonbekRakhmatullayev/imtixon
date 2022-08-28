import "./pageasBook.scss";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UseAuth } from "../hook/UseAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemContext";

export const PagesBook = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const [data, setData] = useState();
  const { token } = UseAuth();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/bookId/${params.id}`,
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
          <div>
            <div className="d-flex">
              <div>
                <img
                  src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                  width={382}
                  height={400}
                  alt=""
                />
              </div>
              <div className="mx-5">
                <div>
                  <h2 className="book__title">{data?.title}</h2>
                  <p className="book__page">Sahifalar soni: {data?.page}</p>
                  <p className="book__page">Chop etilgan: {data?.year}yilda</p>
                  <p className="book__page">Sotuvda narxi {data?.price}$</p>
                  <div>
                    <p className="mb-0 fs-4">To'liq ma'lumot</p>
                    <p className="w-75">{data?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="d-flex justify-content-around mt-5">
                <li className={`card book__text ${theme}`} >
                  <p>
                    Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami
                    bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi
                    motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                    Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi.
                    Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina
                    ertangi kunga yetib keladi.
                  </p>
                </li>
                <li className={`card book__text ${theme}`}>
                  <p>
                    Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra,
                    tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga
                    to‘lib ketgan.
                  </p>
                </li>
              </ul>
              <ul className="pagesbooks__list">
                {books.length &&
                  books.map((e) => (
                    <li className="pagesbooks__item">
                      <Link to={`/book/${e.id}`}>
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
  top: 96px;
  width: 100%;
  /* height: 100%; */
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
