import "./accountmy.scss";
import { useEffect, useState } from "react";
import { UseAuth } from "../../../../hook/UseAuth";
// import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import ContentData from "../../../../Assets/content";
import useLang from "../../../../hook/useLang";

export const AccountMy = () => {
  const { token, setToken } = UseAuth();
  const [account, setAccount] = useState([]);

  let [lang] = useLang();

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

  const funcAccount = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { first_name, last_name, phone, image } = evt.target.elements;

    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("image", image.files[0]);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={funcAccount} action="" className="d-flex mt-5">
        <div className="d-flex flex-column mx-5 ">
          <img
            className="rounded-circle mb-3"
            src={`https://book-service-layer.herokuapp.com/${account.image}`}
            width={200}
            height={200}
            alt=""
          />
          <input type="file" name="image" />
        </div>
        <div>
          <div>
            <h3 className="">{ContentData[lang].my_profile}</h3>
            <h5 className="m-0 p-1">{ContentData[lang].profi_name}</h5>
            <input
              className="form-control accountmy__input"
              type="text"
              name="first_name"
              defaultValue={account.first_name}
            />

            <p>{ContentData[lang].profi_pleas}</p>
            <h5 className="m-0 p-1">{ContentData[lang].profi_last}</h5>
            <input
              className="form-control accountmy__input"
              type="text"
              name="last_name"
              defaultValue={account.last_name}
            />
            <p>{ContentData[lang].profi_enter}</p>
            <h5 className="m-0 p-1">{ContentData[lang].profi_phone}</h5>
            <input
              className="form-control accountmy__input"
              type="tel"
              name="phone"
              defaultValue={account.phone}  
            />
            <p>{ContentData[lang].profi_number}</p>
            <button className="accountmr__btn" type="submit">
              {ContentData[lang].account_save}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
