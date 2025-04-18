import React from "react";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import Title from "../../components/Title/Title";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const HomePage = ({ veteran }) => {
  return (
    <>
      <Header />

      <Main veteran={veteran} />

      <Footer />
    </>
  );
};

export default HomePage;
