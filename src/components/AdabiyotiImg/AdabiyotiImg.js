import { useContext } from "react";
import styled from "styled-components";
import img_beg from "../../Assets/Images/img_beg.png";
import { ThemeContext } from "../../context/ThemContext";

export const AdabiyotiImg = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Adabiyoti__img className={theme}>
      <img src={img_beg} alt="" width={1200} height={347} />
    </Adabiyoti__img>
  );
};

const Adabiyoti__img = styled.div`
margin-top: 54px;
padding-left: 15px;
padding-right: 15px;
`