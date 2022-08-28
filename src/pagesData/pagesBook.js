import "./pageasBook.scss";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UseAuth } from "../hook/UseAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemContext";
import useLang from "../hook/useLang";
import ContentData from "../Assets/content";

export const PagesBook = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const [data, setData] = useState();
  const { token } = UseAuth();
  const [books, setBooks] = useState([]);
  let [lang] = useLang();
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
                  <p className="book__page"> {ContentData[lang].sahifalar_soni}: {data?.page}</p>
                  <p className="book__page">{ContentData[lang].chop_etilgan}: {data?.year}{ContentData[lang].yil_yil}</p>
                  <p className="book__page"> {ContentData[lang].sotuvda_narxi}{data?.price}$</p>
                  <div>
                    <p className="mb-0 fs-4">{ContentData[lang].toliq_malumot}</p>
                    <p className="w-75">{data?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="d-flex justify-content-around mt-5">
                <li className={`card book__text ${theme}`} >
                  <p>
                  {ContentData[lang].text__text}
                  </p>
                </li>
                <li className={`card book__text ${theme}`}>
                  <p>
                  {ContentData[lang].text__text1}
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

`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
