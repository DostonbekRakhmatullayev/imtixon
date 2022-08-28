import "./addbook.scss";
import styled from "styled-components";
import axios from "axios";
import { UseAuth } from "../../hook/UseAuth";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import Addbook from "../../Assets/Images/Addbook.png";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";

export const AddBook = () => {
  let [lang] = useLang();
  const { token, setToken } = UseAuth(AuthContext);
  const [dataId, setDataId] = useState(1);
  const [data, setData] = useState([]);

  const selectClick = (evt) => {
    setDataId(evt.target.value);
  };
  const asd = (evt) => {
    console.log(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/genreId/${dataId}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((ress) => setData(ress.data))
      .catch((error) => console.log(error));
  }, [dataId]);

  const SubmitFunc = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const {
      image,
      title,
      page,
      year,
      price,
      genre_id,
      author_id,
      discription,
    } = evt.target.elements;

    formData.append("image", image.files[0]);
    formData.append("title", title.value);
    formData.append("page", page.value);
    formData.append("year", year.value);
    formData.append("price", price.value);
    formData.append("genre_id", genre_id.value);
    formData.append("author_id", author_id.value);
    formData.append("description", discription.value);
    axios
      .post(`https://book-service-layer.herokuapp.com/book`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <AddAuthor__box>
        <form className="d-flex" onSubmit={SubmitFunc}>
          <div className="Addbook__img">
            <img
              className="mt-2"
              src={Addbook}
              alt=""
              width={300}
              height={482}
            />
            <input className="mt-3" type="file" name="image" />
          </div>
          <div className="Addbook__box">
            <Book__title>{ContentData[lang].book_book} </Book__title>
            <Input__book type="text" name="title" placeholder={ContentData[lang].book_title} />
            <Input__book type="number" name="page" placeholder={ContentData[lang].book_pages} />
            <Input__book type="text" name="year" placeholder={ContentData[lang].book_year} />
            <Input__book type="text" name="price" placeholder={ContentData[lang].book_price} />
            <Select__book name="genre_id"  onClick={selectClick}>
              <option disabled selected>
              {ContentData[lang].book_country}
              </option>
              <option value="1">{ContentData[lang].temuriylar_davri} </option>
              <option value="2">{ContentData[lang].jadid_adabiyoti} </option>
              <option value="3">{ContentData[lang].sovet_davri}</option>
              <option value="4">{ContentData[lang].mustaqillik_davri}</option>
            </Select__book>
            <Select__book name="author_id" onClick={asd}>
            <option disabled selected>
              {ContentData[lang].book_author}
              </option>
              {data.length &&
                data.map((e) => <option value={e.id}>{e.first_name}</option>)}
            </Select__book>
            <Textarea__book name="discription" placeholder={ContentData[lang].book_description}></Textarea__book>
            <button className="button__book" type="submit">{ContentData[lang].book_create}</button>
          </div>
        </form>
      </AddAuthor__box>
    </>
  );
};

const AddAuthor__box = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Input__book = styled.input`
width: 340px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 30px;
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`;

const Select__book = styled.select`
width: 340px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 30px;
  /* padding-right: 220px; */
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`

const Book__title = styled.h2`
margin-top: 13px;
/* margin-left: -170px; */
font-weight: 900;
font-size: 36px;
line-height: 51px;
color: #000000;
`

const Textarea__book = styled.textarea`
 padding-left: 30px;
 background: #FFFFFF;
 width: 340px;  
 border: 1px solid #B4B4BB;
border-radius: 10px;
`

