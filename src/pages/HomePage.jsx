import React from "react";
import Header from "../components/Header/Header"; // Импорт Header
import "./HomePage.css";
import Title from "../components/Title/Title";
import Main from "../components/Main/Main";
import Footer from './../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Title />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
