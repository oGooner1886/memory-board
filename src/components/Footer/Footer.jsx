import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logo from "../../assets/Logo.svg";
const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* <Link to="/" className={style.nav__link}>
        <img src={logo} alt="Logo"></img>
      </Link> */}

      <div className={style.links}>
        <nav>
          <ul className={style.leftItems}>
            <Link to="/#about" className={style.leftItem}>
              О проекте
            </Link>
            <Link to="/#history" className={style.leftItem}>
              Истории
            </Link>
          </ul>
        </nav>

        <nav>
          <ul className={style.rightItems}>
            <Link to="/#partners" className={style.rightItem}>
              Партнеры
            </Link>
            <Link to="/#authors" className={style.rightItem}>
              Авторы проекта
            </Link>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
