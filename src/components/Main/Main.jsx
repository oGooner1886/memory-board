import React from "react";
import style from "./Main.module.css";
import background from "../../assets/background.jpg";
import { Link } from "react-router-dom";
import AboutProject from "./AboutProject/AboutProject";
import OurPartners from "./OurPartners/OurPartners";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Main = ({ veteran }) => {
  const location = useLocation();

  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#history") {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer}>
        <img
          className={style.imgmain}
          src={background}
          alt="Главное изображение"
        />
      </div>

      <div className={style.textContent} ref={sectionRef} id="#history">
        <h6 className={style.saveText}>// Сохраним подвиг в памяти</h6>
        <h1 className={style.title}>Истории героев</h1>
        <div className={style.titleDivider} />
      </div>

      <div className={style.imageGallery}>
        {veteran.map((hero) => (
          <Link
            key={hero.uid}
            className={style.heroCard}
            to={`/veteran/${hero.uid}`}
          >
            <div className={style.heroInfo}>
              <h5 className={style.heroName}>
                0{hero.uid}. {hero.fullName}
              </h5>
            </div>
            <img
              src={"../../img/" + hero.gallery}
              alt={`Портрет ${hero.fullName}`}
              className={style.heroImage}
            />
          </Link>
        ))}
      </div>
      <AboutProject />
      <OurPartners />
    </div>
  );
};

// <img src={'../../images/menu' + gallery} alt="" />

export default Main;
