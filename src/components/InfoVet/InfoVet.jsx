import React from "react";
import style from "./InfoVet.module.css";
import VolunteerPage from "../VolunteerPage/VolunteerPage";
const InfoVet = ({ gallery, birthDay, deathDay, descr, volunteer }) => {
  return (
    <div className={style.wrapper}>
      <img src={"../../img/" + gallery} alt="" className={style.avatar}/>
      <div className={style.date}>
        {birthDay + " " + `\u2014` + " " + deathDay}
      </div>
      <div className={style.description}>
        <div className={style.descriptionVeteran}>
          <div>{descr}</div>
        </div>
        <div className={style.descriptionVolunteer}>
          {volunteer.map((el) => (
            <VolunteerPage
              key={el.vid}
              fullName={el.fullName}
              gallery={el.gallery}
              institution={el.institution}
              status={el.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoVet;
