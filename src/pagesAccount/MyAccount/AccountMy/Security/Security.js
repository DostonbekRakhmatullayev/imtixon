import "./Sacurity.scss";
import { useEffect, useState } from "react";
import { UseAuth } from "../../../../hook/UseAuth";
import axios from "axios";
import ContentData from "../../../../Assets/content";
import useLang from "../../../../hook/useLang";

export const Security = () => {
  const { token, setToken } = UseAuth();
  let [lang] = useLang();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const funcSecurity = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { email, currentPassword, newPassword, passwordname } =
      evt.target.elements;

    formData.append("email", email.value);
    formData.append("currentPassword", currentPassword.value);
    formData.append("newPassword", newPassword.value);
    if (passwordname.value === newPassword.value) {
      axios
        .put(
          `https://book-service-layer.herokuapp.com/user/security`,
          formData,
          {
            headers: {
              Authorization: token.token,
            },
          }
        )
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="security__inner">
      <h4 className="m-0 p-2">{ContentData[lang].account_change}</h4>
      <form onSubmit={funcSecurity}>
        <h5 className="p-0 m-0 my-3">{ContentData[lang].account_email}</h5>
        <input
          className="security__input form-control"
          type="email"
          name="email"
          defaultValue={accounts.email}
        />
        <p>{ContentData[lang].account_enter}</p>
        <h5 className="m-0 p-1">{ContentData[lang].account_current}</h5>
        <input
          className="security__input form-control"
          type="password"
          name="currentPassword"
        />
        <p>{ContentData[lang].account_please}</p>
        <h5 className="m-0 -1">{ContentData[lang].account_password}</h5>
        <input
          className="security__input form-control"
          type="password"
          name="newPassword"
        />
        <p>{ContentData[lang].account_phone}</p>
        <input type="password" name="passwordname" />
        <button className="security__btn" type="submit">
          {ContentData[lang].account_save}
        </button>
      </form>
    </div>
  );
};
