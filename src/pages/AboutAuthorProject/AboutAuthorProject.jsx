import React from "react";
import Header from "../../components/Header/Header";
import style from "./AboutAuthorProject.module.css";
import { Link } from "react-router-dom";
const AboutAuthorProject = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h6 className={style.subtitle}>
          Главная // <span>Авторы проекта</span>
        </h6>
        <div className={style.title}>Авторы проекта</div>

        <div className={style.container}>
          <div className={`${style.member} ${style.one} `}>
            <h3>Махринский Станислав Васильевич</h3>
            <p>Руководитель проекта</p>
          </div>

          <div className={`${style.member} ${style.two} `}>
            <h3>Тумасов Александр Игоревич</h3>
            <p>Координатор проекта</p>
          </div>
          <div className={`${style.member} ${style.three} `}>
            <h3>
              <Link to={"https://t.me/seregka_gooner"}>
                Покусаев Сергей Андреевич
              </Link>
            </h3>
            <p>Руководитель команды разработки</p>
          </div>

          <div className={`${style.member} ${style.four} `}>
            <h3>Завьялов Роман Александрович</h3>
            <p>Разработчик</p>
          </div>
          <div className={`${style.member} ${style.five} `}>
            <h3>Татанов Алексей Николаевич</h3>
            <p>Разработчик</p>
          </div>
          <div className={`${style.member} ${style.six} `}>
            <h3>Стиценко Арина Игоревна</h3>
            <p>Разработчик</p>
          </div>

          <div className={`${style.member} ${style.seven} `}>
            <h3>Сухов Сергей Валерьевич</h3>
            <p>Разработчик</p>
          </div>
          <div className={`${style.member} ${style.eight} `}>
            <h3>Батбаев Радим Хамбарович</h3>
            <p>Дизайн</p>
          </div>
          <div className={`${style.member} ${style.nine} `}>
            <h3>Букарева Виктория Александровна</h3>
            <p>Копирайтер</p>
          </div>
          <div className={`${style.member} ${style.ten} `}>
            <h3>Тагиров Арсений Фаридович</h3>
            <p>Аналитик</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthorProject;
