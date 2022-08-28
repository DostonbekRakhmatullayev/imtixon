import { useContext, useState } from "react";
import styled from "styled-components";
import search_img from "../../Assets/Images/search_img.png";
import axios from "axios";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";
import { ThemeContext } from "../../context/ThemContext";


export const Searchbook = () => {
  let [lang] = useLang()
  const [data, setData] = useState({});
  const { theme } = useContext(ThemeContext);

  function funkSearch(evt) {
    evt.preventDefault();

    const { inputEl } = evt.target.elements;
console.log( inputEl.value.toLowerCase());
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/search?book=${inputEl.value?.toLowerCase()}`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }


  return (
    <>
      <div>
        <Searchbook__beg>
          <Searchbook__box className={theme}>
            <Searchbook__title>{ContentData[lang].qidirish__qidirish}</Searchbook__title>
            <form onSubmit={funkSearch} className="d-flex">
              <label className="d-flex">
              <Searchbook__input
              name="inputEl"
                type="text"
                placeholder={ContentData[lang].qidirish_input}
              />
              <Button__searchbook type="submit">
                <img src={search_img} alt="" width={24} height={24} />
                {ContentData[lang].qidirish_izlash}
              </Button__searchbook>
              </label>
            </form>
          </Searchbook__box>
        </Searchbook__beg>
        <Box__searchbook>
          {data.length &&
            data.map((e) => (
              <Searchabook__item>
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
                  <h2>{e.title}</h2>
                  <p>{e.page}</p>
                  <p>{e.price}</p>
                  <p>{e.year}</p>
                  <p>{e.description}</p>
                </div>
              </Searchabook__item>
            ))}
        </Box__searchbook>
      </div>
    </>
  );
};

const Searchbook__beg = styled.div`
  width: 100vh !important;
  position: absolute;
`;

const Searchbook__box = styled.div`
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

const Searchbook__title = styled.h2`
  margin-bottom: 13px;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const Searchbook__input = styled.input`
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

const Button__searchbook = styled.div`
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

const Box__searchbook = styled.div`
  margin-top: 160px;
`;

const Searchabook__item = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #fff;
`;
