import React from 'react';
import './Footer.css'; // Создайте этот файл для стилей
import './reset.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
        <Link to="/" className="nav__link"><img src="./img/footer-logo.png" alt="Logo" className="footer-logo"></img></Link>
        <hr className="footer-hr"></hr>

        <div className="boton">
            <nav className="left">
                <ul  className="left-items">
                <Link to="/" className="nav__link"><li className="left-item">О проекте</li></Link>
                <Link to="/" className="nav__link"><li className="left-item">Истории</li></Link>
                </ul>
            </nav>

            <nav className="right">
                <ul  className="right-items">
                <Link to="/" className="nav__link"><li className="right-item">Партнеры</li></Link>
                <Link to="/" className="nav__link"> <li className="right-item">Авторы проекта</li></Link>
                </ul>
            </nav>
        </div>
    </footer>
  );
}

export default Footer;