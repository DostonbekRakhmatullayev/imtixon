import styled from "styled-components";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Search } from "../../components/Search/Search.";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext";

export const Home = () => {
  let [lang] = useLang()
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme}>
        <Search />
        <Home__box>
          <Home__title>{ContentData[lang].asosiy_kategoriyalar}</Home__title>
          <Home__list>
            <Home__item>
              <NavLink to="temuriylar"  className={theme}>
                <Home__strong >{ContentData[lang].temuriylar_davri}</Home__strong>{" "}
              </NavLink>
            </Home__item>
            <Home__item>
              <NavLink to="jadid"  className={theme}>
                {" "}
                <Home__strong>{ContentData[lang].jadid_adabiyoti}</Home__strong>{" "}
              </NavLink>
            </Home__item>
            <Home__item>
              <NavLink to="sovet"  className={theme}>
                {" "}
                <Home__strong>{ContentData[lang].sovet_davri}</Home__strong>
              </NavLink>
            </Home__item>
            <Home__item>
              <NavLink to="mustaqillik"  className={theme}>
                <Home__strong>{ContentData[lang].mustaqillik_davri}</Home__strong>{" "}
              </NavLink>
            </Home__item>
          </Home__list>
          <div>
            <Outlet />
          </div>
        </Home__box>
      </div>
    </>
  );
};

const Home__box = styled.div`
  margin-top: 160px;
`;

const Home__title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const Home__list = styled.ul`
  display: flex;
  justify-content: center;
`;

const Home__item = styled.li`
  margin-right: 69px;
  margin-top: 30px;
`;

const Home__strong = styled.strong`
  font-weight: bold;
`;
