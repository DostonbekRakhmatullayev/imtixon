import "./sovetDavri.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemContext";

export const SovetDavri = () => {
  const [sovetDavri, setSovetDavri] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/3`)
      .then((res) => setSovetDavri(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={theme}>
        <ul className="sovetDavri__list">
          {sovetDavri.length &&
            sovetDavri.map((e) => (
              <li className="sovetDavri__item">
                <Link to={`/genrel/${e.id}`} className={theme}>
                  <img
                    className="sovetDavri__img"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={260}
                    height={220}
                    alt=""
                  />
                  <div>
                    <strong className="sovetDavri__name">{e.first_name}</strong>
                    <strong className="sovetDavri__name"> {e.last_name}</strong>
                  </div>
                  <div>
                    <strong className="sovetDavri__birth">
                      {e.date_of_birth}
                    </strong>
                    <strong className="sovetDavri__birth">
                      {" "}
                      {e.date_of_death}
                    </strong>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
