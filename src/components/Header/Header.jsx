import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <header className={style.wrapper}>
      <Link to="/" className={style.logo}>
        <img src={logo} alt="LOGO" className="logo"></img>
      </Link>
      <nav className={style.navbar}>
        <Link to="/#about" className={style.navbarItem}>
          О проекте
        </Link>
        <Link to="/#history" className={style.navbarItem}>
          Истории
        </Link>
        <Link to="/#partners" className={style.navbarItem}>
          Партнеры
        </Link>
        <Link to="/" className={style.navbarItem}>
          Авторы проекта
        </Link>
      </nav>

      <div className={style.form}>
        <Link
          to="https://forms.yandex.ru/u/6757363a02848ff3551de01b/"
          className={style.fillTheForm}
        >
          <button className={style.button}>Заполнить анкету</button>
        </Link>
        {/* <img src="./img/search.svg" alt="поиск" className={style.search}></img> */}
      </div>
    </header>
  );
};

export default Header;
