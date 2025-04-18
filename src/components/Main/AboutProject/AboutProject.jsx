import variablesText from "./variablesText.js";
import style from "./AboutProject.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const varT = variablesText;

const AboutProject = () => {
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#about") {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#authors") {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <span className={style.anchor} ref={sectionRef} id="#about">
          {varT.anchorTitle}{" "}
        </span>
        <span className={style.quote}>{varT.greatQuote}</span>
        <span className={style.signature}>{varT.authorGreatQuote}</span>
      </div>
      <div className={style.about}>
        <div>
          Проект «Подвиг, сохранённый в цифре» создан цифровыми волонтёрами
          Астраханской области в преддверии 80-летия Великой Победы Советской
          армии над фашизмом в 1945 году.
          <br />
          <br />
          На сайте собраны истории героев, сражавшихся на фронте и трудившихся в
          тылу, тех, кто своей доблестью, отвагой, силой воли и духа добывал
          победу, тех, кто отдал жизнь за мирное небо над нашей Родиной. Эти
          истории рассказаны их потомками – цифровыми волонтерами со всей
          России. Они напоминают нам о неоценимом вкладе каждого человека,
          жившего в те годы, в общую победу.
          <div>
            <Link to={'/authors'} id="#authors">
              <button className={style.aboutAuthor}>{varT.aboutAuthor}</button>
            </Link>
          </div>
        </div>
        <div>
          Мы гордимся и чтим память о наших предках, которые стали примером
          мужества, достоинства и преданности. Память об их подвиге сохранена в
          этом цифровом альбоме. Если вы хотите рассказать историю героя вашей
          семьи, необходимо заполнить анкету по ссылке.
        </div>
      </div>
    </div>
  );
};
export default AboutProject;
