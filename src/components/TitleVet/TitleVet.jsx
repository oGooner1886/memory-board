import React from "react";
import style from "./TitleVet.module.css";
const TitleVet = ({ fullName, rank }) => {
  return (
    <div className={style.wrapper}>
      <h6 className={style.subtitle}>
        Главная // <span>{fullName}</span>
      </h6>
      <div className={style.titleContainer}>
        <h1 className={style.title}>{fullName}</h1>
        <div className={style.rank}>{rank}</div>
      </div>
    </div>
  );
};

export default TitleVet;
