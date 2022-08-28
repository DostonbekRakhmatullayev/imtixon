import "./mustaqillikdavri.scss"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemContext";

export const Mustaqillikdavri = () => {
  const [mustaqillikdavri, setmustaqillikdavri] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/4`)
      .then((res) => setmustaqillikdavri(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="mustaqillikdavri__list">
          {mustaqillikdavri.length &&
            mustaqillikdavri.map((e) => (
              <li className="mustaqillikdavri__item">
                <Link to={`/genrel/${e.id}`} className={theme} >
                <img
                className="mustaqillikdavri__img"
                  src={`https://book-service-layer.herokuapp.com/${e.image}`}
                  width={260}
                    height={220}
                  alt=""
                />
                <div>
                  <strong className="mustaqillikdavri__name">{e.first_name}</strong>
                  <strong className="mustaqillikdavri__name"> {e.last_name}</strong>
                </div>
                <div>
                  <strong className="mustaqillikdavri__birth">{e.date_of_birth}</strong>
                  <strong className="mustaqillikdavri__birth"> {e.date_of_death}</strong>
                </div>
              </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
