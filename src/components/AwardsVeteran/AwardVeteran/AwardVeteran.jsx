import React from "react";
import style from "./AwardVeteran.module.css";
const AwardVeteran = ({ title, gallery }) => {
  return (
    <div className={style.wrapper}>
      <img src={"../../img/" + gallery} alt="" className={style.avatar} />
      <span className={style.title}>{title}</span>
    </div>
  );
};

export default AwardVeteran;
