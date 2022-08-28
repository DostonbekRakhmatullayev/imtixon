import "./AddAuthor.scss";
import styled from "styled-components";
import axios from "axios";
import { UseAuth } from "../../hook/UseAuth";
import { AuthContext } from "../../context/AuthContext";
import Addauthor from "../../Assets/Images/Addauthor.png";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";

export const AddAuthor = () => {
  let [lang] = useLang();
  const { token, setToken } = UseAuth(AuthContext);

  const SubmitFunc = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const {
      first_name,
      last_name,
      date_of_birth,
      date_of_death,
      country,
      bio,
      image,
      genre_id,
    } = evt.target.elements;

    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("date_of_birth", date_of_birth.value);
    formData.append("date_of_death", date_of_death.value);
    formData.append("country", country.value);
    formData.append("genre_id", genre_id.value);
    formData.append("bio", bio.value);
    formData.append("image", image.files[0]);
    axios
      .post(`https://book-service-layer.herokuapp.com/author`, formData, {
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
        <form onSubmit={SubmitFunc} className="d-flex w-100">
          <div className="addauthor__file">
            <img src={Addauthor} alt="" width={350} height={266} className="mb-3" />
            <input type="file" name="image" />
          </div>
          <div className="addauthor__beg">
            <h2>{ContentData[lang].nav_muallif}</h2>
            <div className="d-flex flex-column">
              <Input__author
                type="text"
                name="first_name"
                placeholder={ContentData[lang].author_name}
              />
              <Input__author
                type="text"
                name="last_name"
                placeholder={ContentData[lang].author_last}
              />
              <Input__author
                type="number"
                name="date_of_birth"
                placeholder={ContentData[lang].author_birth}
              />
              <Input__author
                type="number"
                name="date_of_death"
                placeholder={ContentData[lang].author_death}
              />
              <Input__author
                type="text"
                name="country"
                placeholder={ContentData[lang].author_country}
              />
              <Select__author name="genre_id">
                <option disabled selected>
                  {ContentData[lang].author_country}
                </option>
                <option value="1">{ContentData[lang].temuriylar_davri}</option>
                <option value="2">{ContentData[lang].jadid_adabiyoti}</option>
                <option value="3">{ContentData[lang].sovet_davri}</option>
                <option value="4">{ContentData[lang].mustaqillik_davri}</option>
              </Select__author>
              <Textarea__author
                name="bio"
                placeholder={ContentData[lang].author_bio}
              ></Textarea__author>
            </div>
            <button className="button__author" type="submit">{ContentData[lang].author_create}</button>
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

const Input__author = styled.input`
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

const Select__author = styled.select`
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

const Textarea__author = styled.textarea`
 padding-left: 30px;
 background: #FFFFFF;
 width: 340px;  
 border: 1px solid #B4B4BB;
border-radius: 10px;
`