import Switch from "../scss/Switch";

export default function Header() {
  return (
    <div>
      <ul className="heder__wrap">
        <li className="header__li header__li_logo">
          <div className="header__logo">
            <img
              className="header__logo__img"
              src="./img/logo.png"
              alt="logo"
            />
          </div>
        </li>
        <li className="header__li header__li_info">Про Нас</li>
        <li className="header__li">Контакти</li>
        <li className="header__li">Замовити</li>
        <li className="header__li">
          <Switch />
        </li>
      </ul>
    </div>
  );
}
