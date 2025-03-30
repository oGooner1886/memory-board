import style from "./OurPartners.module.css";
import minGos from "../../../assets/svg/MGUAO.svg";
import digRus from "../../../assets/svg/DR.svg";
import rectangle from "../../../assets/svg/Rectangle39589.png";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
const lstImgPartners = [minGos, digRus, false, false, false];

const OurPartners = () => {


const location = useLocation();
  const sectionRef = useRef(null);
  useEffect(() => {
    if (location.hash === "#partners") {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <div className={style.wrapper} ref={sectionRef} id="#partners">
      <span className={style.anchor}>// Наши партнеры</span>
      <div className={style.ourPartners}>
        {lstImgPartners.map((url, indx) => {
          return (
            <div
              key={indx}
              className={`
                                ${style["container-our-part"]}
                                ${!url && style["div-hidden"]}
                            `}
            >
              <img src={rectangle} className={style["big-image"]} />
              {url && <img src={url} className={style["small-image"]} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurPartners;
