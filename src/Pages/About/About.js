import styled from "styled-components";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Searchbook } from "../../components/Search/Searchbook";
import useLang from "../../hook/useLang";
import ContentData from "../../Assets/content";

export const About = () => {
  let [lang] = useLang()
  return (
    <>
     <div>
      <Searchbook/>
     <About__box>
        <About__title>{ContentData[lang].asosiy_kategoriyalar}</About__title>
        <About__list>
          <About__item>
            <NavLink to="temuriylarbooks">
              <About__strong>{ContentData[lang].temuriylar_davri}</About__strong>{" "}
            </NavLink>
          </About__item>
          <About__item>
            <NavLink to="jadidbooks">
              {" "}
              <About__strong>{ContentData[lang].jadid_adabiyoti}</About__strong>{" "}
            </NavLink>
          </About__item>
          <About__item>
            <NavLink to="sovetbooks">
              {" "}
              <About__strong>{ContentData[lang].sovet_davri}</About__strong>
            </NavLink>
          </About__item>
          <About__item>
            <NavLink to="mustaqillikbooks">
              <About__strong>{ContentData[lang].mustaqillik_davri}</About__strong>{" "}
            </NavLink>
          </About__item>
        </About__list>
        <div>
          <Outlet />
        </div>
      </About__box>
     </div>
    </>
  );
};

const About__box = styled.div`
  margin-top: 160px;
`;

const About__title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const About__list = styled.ul`
  display: flex;
  justify-content: center;
`;

const About__item = styled.li`
  margin-right: 69px;
  margin-top: 30px;
  `;

const About__strong = styled.strong`

color: rgba(255, 255, 255, 0.6);

`
