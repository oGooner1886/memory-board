import React from "react";
import style from "./Title.module.css";
const Title = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Подвиг, сохранённый в цифре</h1>
      <p className={style.description}>
        Цифровые волонтёры Астраханской области о своих <br></br>предках,
        сражавшихся в годы Великой <br></br>Отечественной войны за свободу, за
        мир, за Родину.
      </p>
    </div>
  );
};

export default Title;
