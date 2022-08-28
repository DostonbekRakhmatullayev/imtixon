import { Routes, Route, NavLink, Link  } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Assets/Images/logo.svg";
import { AdabiyotiImg } from "./components/AdabiyotiImg/AdabiyotiImg";
import { Search } from "./components/Search/Search.";
import { Home } from "./Pages/Home/Home";
import { Temuriylar } from "./pagesAdiblar/Temuriylar/Temuriylar";
import { Settings } from "./components/Settings/Settings";
import { JaddidAdabiyoti } from "./pagesAdiblar/JadidAdabiyoti/JadidAdabiyoti";
import { SovetDavri } from "./pagesAdiblar/SovetDavri/SovetDavri";
import { Mustaqillikdavri } from "./pagesAdiblar/Mustaqillikdavri/Mustaqillikdavri";
import { About } from "./Pages/About/About";
import { TemuriylarBook } from "./pagesBook/TemuriyBook/TemuriylarBook";
import { SovetBook } from "./pagesBook/SovetBook/SovetBook";
import { MustaqilBook } from "./pagesBook/MustaqilBook/MustaqilBook";
import { JadidBook } from "./pagesBook/JadidBook/JadidBook";
import useLang from "./hook/useLang";
import ContentData from "./Assets/content";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemContext";

export const Private = () => {
  let [lang] = useLang();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header className={theme}>
        <Container>
          <header className="d-flex justify-content-between  align-items-center">
            <Link to="/">
              <img
                className="mb-4"
                src={Logo}
                alt="logo img"
                width={96}
                height={36}
              />
            </Link>
            <nav className="d-flex align-items-center">
              <Header_list className="">
                <Header__item>
                  <NavLink to="/" className={theme}>
                    <Header__NavLink className={theme}>
                      {ContentData[lang].nav_home}
                    </Header__NavLink>
                  </NavLink>
                </Header__item>
                <Header__item>
                  <NavLink to="/Nasr" className={theme}>
                    {" "}
                    <Header__NavLink>
                      {ContentData[lang].nav_nasr}
                    </Header__NavLink>
                  </NavLink>
                </Header__item>
                <Header__item>
                  <NavLink to="/Nazm" className={theme}>
                    {" "}
                    <Header__NavLink>
                      {ContentData[lang].nav_nazm}
                    </Header__NavLink>
                  </NavLink>
                </Header__item>
                <Header__item>
                  <NavLink to="/Maqolalar" className={theme}>
                    {" "}
                    <Header__NavLink>
                      {ContentData[lang].nav_maqolalar}
                    </Header__NavLink>
                  </NavLink>
                </Header__item>
                <Header__item>
                  <NavLink to="/Forum"className={theme}>
                    {" "}
                    <Header__NavLink>
                      {ContentData[lang].nav_forum}
                    </Header__NavLink>
                  </NavLink>
                </Header__item>
              </Header_list>
              <div>
                <Settings />
              </div>
            </nav>
          </header>
        </Container>
      </Header>
      <main>
        <section>
          <Container>
            <AdabiyotiImg />
          </Container>
        </section>
        <section>
          <Container>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="temuriylar" index element={<Temuriylar />} />
                <Route path="jadid" element={<JaddidAdabiyoti />} />
                <Route path="sovet" element={<SovetDavri />} />
                <Route path="mustaqillik" element={<Mustaqillikdavri />} />
              </Route>
              <Route path="/Nasr" element={<About />}>
                <Route
                  path="temuriylarbooks"
                  index
                  element={<TemuriylarBook />}
                />
                <Route path="jadidbooks" element={<JadidBook />} />
                <Route path="sovetbooks" element={<SovetBook />} />
                <Route path="mustaqillikbooks" element={<MustaqilBook />} />
              </Route>
              <Route path="/Nazm" element={<>Nazm</>} />
              <Route path="/Maqolalar" element={<>Maqolalar</>} />
              <Route path="/Forum" element={<>Forum</>} />
            </Routes>
          </Container>
        </section>
      </main>
    </div>
  );
};

const Header = styled.div`
  padding-top: 22px;
  padding-bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 10px 1px 10px #fff;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 81px;
  padding-right: 81px;
`;

const Header_list = styled.ul`
  display: flex;
  margin-right: 121px !important;
  padding: 0;
  margin: 0;
`;

const Header__item = styled.li`
  margin-left: 43px;
  padding-bottom: 28px;
  /* border-bottom: 2px solid #191919; */

  /* &:hover {
    border-bottom: 2px solid #ffffff;
  } */
`;

const Header__NavLink = styled.strong`
font-weight: bold;
  /* font-weight: 300; */
  font-size: 16px;
  line-height: 144.4%;
  /* color: #ffffff; */
`;
