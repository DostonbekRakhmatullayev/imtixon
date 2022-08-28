import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import "./myAccount.scss";
import ContentData from "../../Assets/content";
import useLang from "../../hook/useLang";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext";

export const MyAccount = () => {
  const { theme } = useContext(ThemeContext);

  let [lang] = useLang();
  return (
    <>
      <div className={theme}>
        <MyAccount__box className={theme}>
          <div className="myaccount__header">
            <Container>
              <div className={`d-flex ${theme}`}>
                <NavLink className={`MyAccount__navLink ${theme}`} to="My_account">
                  {ContentData[lang].my_account}
                </NavLink>

                <NavLink className={`MyAccount__navLink ${theme}`} to="Security">
                  {ContentData[lang].security__security}
                </NavLink>

                <NavLink className={`MyAccount__navLink ${theme}`} to="Make_Payment">
                  {ContentData[lang].make_payment}
                </NavLink>
              </div>
            </Container>
          </div>
          <Container>
            <Outlet />
          </Container>
        </MyAccount__box>
      </div>
    </>
  );
};

const MyAccount__box = styled.div`
  /* padding: 15px 0; */
  /* background-color: #888888; */
  position: absolute;
  top: 0;
  /* padding-top: 30px; */
  width: 100%;
  height: 100vh;
  /* background-color: #fff; */

  `;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 81px;
  padding-right: 81px;
`;
