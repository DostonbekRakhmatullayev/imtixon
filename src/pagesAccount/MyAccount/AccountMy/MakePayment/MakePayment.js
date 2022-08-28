import "./MakePayment.scss";
import useLang from "../../../../hook/useLang";
import ContentData from "../../../../Assets/content";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemContext";

export const MakePayment = () => {
  let [lang, setLang] = useLang();

  const { theme, setTheme } = useContext(ThemeContext);

  const ChangeLang = (e) => {
    e.preventDefault();
    setLang(e.target.value);
  };
  return (
    <div className="makepayment__inner">
      <h4 className="m-0 py-2">{ContentData[lang].settings_settings}</h4>
      <p className="m-0">{ContentData[lang].ettings_language}</p>
      <select
        className="til__select form-select my-1"
        onChange={ChangeLang}
        defaultValue={lang}
      >
        <option value="uz">Uzbekcha</option>
        <option value="ru">Русский</option>
        <option value="eng">English</option>
      </select>
      <p> {ContentData[lang].ettings_name}</p>

      <div>
        <div
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          <div class="form-check form-switch">
            <input className="form-check-input input__checkbox" type="checkbox" />
          </div>
        </div>
          
      </div>
    </div>
  );
};
