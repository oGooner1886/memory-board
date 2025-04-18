import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <header className={style.wrapper}>
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
        <Link to="/authors" className={style.navbarItem}>
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
      </div>
    </header>
  );
};

export default Header;
