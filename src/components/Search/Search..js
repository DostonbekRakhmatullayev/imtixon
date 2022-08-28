import { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import search_img from "../../Assets/Images/search_img.png";
import axios from "axios";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";
import { ThemeContext } from "../../context/ThemContext";

export const Search = () => {
  let [lang] = useLang();
  const [data, setData] = useState({});
  const { theme } = useContext(ThemeContext);

  function funkSearch(evt) {
    evt.preventDefault();

    const { inputEl } = evt.target.elements;

    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/search?author=${inputEl.value}`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className={theme}>
        <Search__beg>
          <Search__box className={theme}>
            <Search__title>
              {" "}
              {ContentData[lang].qidirish__qidirish}
            </Search__title>
            <form onSubmit={funkSearch} className="d-flex">
             <label className="d-flex">
             <Search__input
                name="inputEl"
                type="text"
                placeholder={ContentData[lang].qidirish_input}
              />
              <Button__search type="submit">
                <img src={search_img} alt="" width={24} height={24} />
                {ContentData[lang].qidirish_izlash}
              </Button__search>
             </label>
            </form>
          </Search__box>
        </Search__beg>
        <Box__search>
          {data.length &&
            data.map((e) => (
              <Searcha__item>
                <div>
                  <img
                    className="mx-5"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={200}
                    height={250}
                    alt=""
                  />
                </div>
                <div className="mx-5">
                  <h2>{e.first_name}</h2>
                  <h2>{e.last_name}</h2>
                  <div>
                    <strong>{e.date_of_birth}</strong>
                    <strong>{e.date_of_death}</strong>
                  </div>
                  <p>{e.bio}</p>
                </div>
              </Searcha__item>
            ))}
        </Box__search>
      </div>
    </>
  );
};

const Search__beg = styled.div`
  width: 100vh !important;
  position: absolute;
`;

const Search__box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1060px;
  margin-top: -214px;
  margin-left: 90px;
  padding-top: 40px;
  padding-bottom: 36px;
  /* background-color: #191919; */
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Search__title = styled.h2`
  margin-bottom: 13px;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const Search__input = styled.input`
  width: 710px;
  padding-left: 15px !important ;
  padding-right: 15px !important;
  padding-left: 27px !important ;
  border: none;
  background: #404040;
  border-radius: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.3);
`;

const Button__search = styled.div`
  margin-left: 15px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 40px;
  padding-right: 48px;
  background: #c9ac8c;
  border-radius: 15px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3c2710;
`;

const Box__search = styled.div`
  margin-top: 160px;
`;

const Searcha__item = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #fff;
`;
