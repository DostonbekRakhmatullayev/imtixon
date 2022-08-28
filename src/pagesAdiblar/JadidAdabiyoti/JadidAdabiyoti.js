import "./jadidAdabiyot.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemContext";

export const JaddidAdabiyoti = () => {
  const [jaddid, setJaddid] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/2`)
      .then((res) => setJaddid(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (                                                  
    <>
      <div>
        <ul className="jadidAdabiyoti__list">
          {jaddid.length &&
            jaddid.map((e) => (
           <li className="jadidAdabiyoti__item">
               <Link  to={`/genrel/${e.id}`} className={theme}>
                <img
                  className="jadidAdabiyoti__img"
                  src={`https://book-service-layer.herokuapp.com/${e.image}`}
                  width={260}
                  height={220}
                  alt=""
                />
                <div>
                  <strong className="jadidAdabiyoti__name">
                    {e.first_name}
                  </strong>
                  <strong className="jadidAdabiyoti__name">
                    {" "}
                    {e.last_name}
                  </strong>
                </div>
                <div>
                  <strong className="jadidAdabiyoti__birth">
                    {e.date_of_birth}
                  </strong>
                  <strong className="jadidAdabiyoti__birth">
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
