import React from "react";
import style from "./VolunteerPage.module.css";
const VolunteerPage = ({ fullName, gallery, institution, status }) => {
  return (
    <>
      <div className={style.volunteer}>
        <img src={"../../img/" + gallery} alt="" className={style.avatar}/>
        <div className={style.info}>
          <h6 className={style.title}>{fullName}</h6>
          <div className={style.subtitle}>{status} {institution}</div>
        </div>
      </div>
    </>
  );
};

export default VolunteerPage;
