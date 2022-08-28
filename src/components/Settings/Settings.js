import "./Settings.scss"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UseAuth } from "../../hook/UseAuth";
import axios from "axios";
import styled from "styled-components";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";

export const Settings = () => {
  let [lang] = useLang()
  const { token, setToken } = UseAuth();
  const [account, setAccount] = useState([]);

  console.log(account);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <>
      <div className="Settings__box d-flex align-items-center position-relative">
        <div>
          <MyPicture
          className="My_Picture"
            src={`https://book-service-layer.herokuapp.com/${account.image}`}
            width={50}
            height={50}
            alt=""
          />
        </div>

        <div className=" dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
                <NavLink className="dropdown-item" to="/Add_book">{ContentData[lang].book_book}</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/Add_author">{ContentData[lang].nav_muallif}</NavLink>
            </li>
            <li className="">
                <NavLink className="dropdown-item" to="/My_account">{ContentData[lang].my_account}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const MyPicture = styled.img`
border-radius: 50%;
`