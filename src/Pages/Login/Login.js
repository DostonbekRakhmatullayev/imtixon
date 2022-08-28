import axios from "axios";
import { useRef } from "react";
import styled from "styled-components";
import { UseAuth } from "../../hook/UseAuth";
import signIn_img from "../../Assets/Images/signIn_img.png";
import { Link } from "react-router-dom";

export const Login = () => {
  const { token, setToken } = UseAuth();
  console.log(token);

  const elEmail = useRef();
  const elPassword = useRef();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();


    const formData = new FormData();
    const {  email, password } = evt.target.elements;

 
    formData.append("email", email.value);
    formData.append("password", password.value);
      axios
      .post(`https://book-service-layer.herokuapp.com/user/login`, formData)
      .then((res) => setToken(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex">
      <Login__img>
        <img src={signIn_img} alt="sign in img" width={500} height={500} />
      </Login__img>
      <Login__form>
        <Login__title>Sign in</Login__title>
        <Login__text>
          Do not you have an account?
          <Login__span>Sign up</Login__span>
        </Login__text>
        <Form__Login onSubmit={handleFormSubmit}>
          <Login__Input
            ref={elEmail}
            type="email"
            placeholder="Email..."
            name="email"
          />
          <Login__Input
            ref={elPassword}
            type="password"
            placeholder="Password..."
            name="password"
          />
          <Login__button type="submit">
            Next step
          </Login__button>
        </Form__Login>
      </Login__form>
    </div>
  );
};

const Login__img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42%;
  height: 100vh;
  background: rgba(201, 172, 140, 0.93);
`;

const Login__form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 108px;
  width: 58%;
  height: 100vh;
  background-color: #fff;
`;

const Login__title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`;

const Login__text = styled.p`
  margin-top: 10px;
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

const Login__span = styled.span`
  color: #549ff9;
`;

const Form__Login = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login__Input = styled.input`
  width: 330px;
  margin-bottom: 16px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  padding-top: 16px;
  padding-bottom: 8px;
  padding-left: 29px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`;

const Login__button = styled.button`
  width: 330px;
  border: 2px solid #152540;
  background: #152540;
  border-radius: 99px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
  transition: ease 0.5s all;
  &:hover {
    background: #ffffff;
    color: #152540;
  }
`;
