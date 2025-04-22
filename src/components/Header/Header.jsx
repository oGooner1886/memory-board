import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

import Hamburger from 'hamburger-react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className={style.wrapper}>
      <button 
        className={`${style.burger} ${isOpen ? style.burgerActive : ''}`} 

        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      
      <nav className={`${style.navbar} ${isOpen ? style.navbarActive : ''}`}>
        <Link 
          to="/" 
          className={`${style.navbarItem} ${style.mainPage}`}
          onClick={() => setIsOpen(false)}
        >
          Главная страница
        </Link>
        <Link 
          to="/#about" 
          className={style.navbarItem}
          onClick={() => setIsOpen(false)}
        >
          О проекте
        </Link>
        <Link 
          to="/#history" 
          className={style.navbarItem}
          onClick={() => setIsOpen(false)}
        >
          Истории
        </Link>
        <Link 
          to="/#partners" 
          className={style.navbarItem}
          onClick={() => setIsOpen(false)}
        >
          Партнеры
        </Link>
        <Link 
          to="/authors" 
          className={style.navbarItem}
          onClick={() => setIsOpen(false)}
        >
          Авторы проекта
        </Link>
      </nav>
      
      <div className={style.form}>
        <Link
          to="https://forms.yandex.ru/u/6757363a02848ff3551de01b/"
          className={style.fillTheForm}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.button}>Заполнить анкету</button>
        </Link>
      </div>
    </header>

    {isOpen && (
      <div 
        className={style.overlay} 
        role="button"
        aria-label="Закрыть меню"
        tabIndex={0}
      />
    )}
  </>
    // <header className={style.wrapper}>
    //   <button className={style.burger} onClick={toggleMenu}>☰</button>
    //   <nav className={style.navbar}>
    //     <Link to="/#about" className={style.navbarItem}>
    //       О проекте
    //     </Link>
    //     <Link to="/#history" className={style.navbarItem}>
    //       Истории
    //     </Link>
    //     <Link to="/#partners" className={style.navbarItem}>
    //       Партнеры
    //     </Link>
    //     <Link to="/authors" className={style.navbarItem}>
    //       Авторы проекта
    //     </Link>
    //   </nav>
    //   <div className={style.form}>
    //     <Link
    //       to="https://forms.yandex.ru/u/6757363a02848ff3551de01b/"
    //       className={style.fillTheForm}
    //     >
    //       <button className={style.button}>Заполнить анкету</button>
    //     </Link>
    //   </div>
    // </header>
  );
};

export default Header;
