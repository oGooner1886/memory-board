import React from "react";
import Header from "../components/Header/Header"; // Импорт Header
import "./HomePage.css";
import Title from "../components/Title/Title";

const HomePage = () => {
  return (
    <>
      <Title />
      <Header />
      <div className="home-page">
        <main className="home-page__main">
          <h1 className="home-page__title">
            Добро пожаловать на главную страницу!
          </h1>
          <p className="home-page__text">Это контент главной страницы.</p>
        </main>
      </div>
    </>
  );
}

export default HomePage;
