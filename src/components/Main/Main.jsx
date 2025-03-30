import React from "react";
import style from "./Main.module.css";
import background from "../../assets/background.jpg";

import img1 from "../../assets/Аджимуратов.png";
import img2 from "../../assets/Бабенко.png";
import img3 from "../../assets/Мешечко.png";
import img4 from "../../assets/Уваров.png";
import img5 from "../../assets/Черкасов.png";
import { Link } from "react-router-dom";
import AboutProject from "./AboutProject/AboutProject";
import OurPartners from "./OurPartners/OurPartners";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Main = ({ veteran }) => {
  console.log(veteran);

  const heroes = [
    { id: 1, fullName: "Аджимуратов Зеит Агезекович", image: img1 },
    { id: 2, fullName: "Бабенко Алексей Андреевич", image: img2 },
    { id: 3, fullName: "Мешечко Терентий Иванович", image: img3 },
    { id: 4, fullName: "Уваров Иван Васильвевич", image: img4 },
    { id: 5, fullName: "Черкасов Алексей Андреевич", image: img5 },
  ];
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
