import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import TitleVet from "../../components/TitleVet/TitleVet";
import InfoVet from "../../components/InfoVet/InfoVet";
import Footer from "../../components/Footer/Footer";
import AwardsVeteran from "../../components/AwardsVeteran/AwardsVeteran";

const VeteranPage = ({ id, fullName, gallery, rank, awards, volunteer, birthDay, deathDay, descr }) => {
    
  return (
    <div>
      <Header />
      <TitleVet fullName={fullName} rank={rank} />
      <InfoVet key={id} gallery={gallery} birthDay={birthDay} deathDay={deathDay} descr={descr}  volunteer={volunteer}/>
      {awards.length > 0 && <AwardsVeteran awards={awards}/>}
      

    <Footer/>
    </div>
  );
};

export default VeteranPage;
