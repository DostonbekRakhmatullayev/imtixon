import axios from "axios";
import signUp_img from "../../Assets/Images/signUp_img.png";
import styled from "styled-components";
import { UseAuth } from "../../hook/UseAuth";
import { Link } from "react-router-dom";
import { RegisterHook } from "../../hook/RegisterHook";

export const Register = () => {
  const {registers, setRegisters} = RegisterHook()
  // const { token, setToken } = UseAuth();
  // console.log(registers);

  const funcSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { first_name, last_name, phone, email, password } =
      evt.target.elements;

    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("email", email.value);
    formData.append("password", password.value);

    axios
      .post(`https://book-service-layer.herokuapp.com/user/register`, formData)
      .then((res) => setRegisters(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="d-flex">
      <Register__img>
        <img src={signUp_img} alt="" width={500} height={500} />
      </Register__img>
      <Register__form>
        <Register__title>Sign up</Register__title>
        <Register__text>
          Already have an account?
          <Span__text>Sign in</Span__text>
        </Register__text>
        <Form__register onSubmit={funcSubmit}>
          <Input__register type="text" name="first_name" placeholder="First name..." />
          <Input__register type="text" name="last_name" placeholder="Last name..." />
          <Input__register type="tel" name="phone" placeholder="Phone..." />
          <Input__register type="email" name="email" placeholder="Email..." />
          <Input__register type="password" name="password" placeholder="Password..." />
          <Button__register type="submit">Next step</Button__register>
        </Form__register>
      </Register__form>
    </div>
  );
};

const Register__img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42%;
  height: 100vh;
  background: rgba(201, 172, 140, 0.93);
`;
const Register__form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 108px;
  width: 58%;
  height: 100vh;
  background-color: #fff;
`;

const Form__register = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input__register = styled.input`
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

const Button__register = styled.button`
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

const Register__title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`;

const Register__text = styled.p`
  margin-top: 10px;
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

const Span__text = styled.span`
  color: #549ff9;
`;
