import React from 'react';
import { Link } from 'react-router-dom';
import './reset.css'
import './Header.css'; // Создайте этот файл для стилей



function Header() {
  return (
    
        <header className="header">
            <div className="left">
            <Link to="/" className="nav__link"><img src="./img/Logo.svg" alt="LOGO" className="logo"></img></Link>
                <nav className="menu">
                    <ul className="menu-items">
                    <Link to="/" className="nav__link"><li className="menu-item">О проекте</li></Link>
                    <Link to="/" className="nav__link"><li className="menu-item">Истории</li></Link>
                    <Link to="/" className="nav__link"><li className="menu-item">Партнеры</li></Link>
                    <Link to="/" className="nav__link"><li className="menu-item">Авторы проекта</li></Link>
                    </ul>
                </nav>
            </div>
            <div className="right">
                <div className="but">
                <Link to="/" className="nav__link"><button className="button">Заполнить анкету</button></Link>
                </div>
                <img src="./img/search.svg" alt="поиск" className="search"></img>
            </div>
        </header>
 
  );
}

export default Header;