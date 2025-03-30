import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import TitleVet from "../../components/TitleVet/TitleVet";
import InfoVet from "../../components/InfoVet/InfoVet";

const VeteranPage = ({ id, fullName, gallery, rank, awards, volunteer, birthDay, deathDay, descr }) => {
    
  return (
    <div>
      <Header />
      <TitleVet fullName={fullName} rank={rank} />
      <InfoVet key={id} gallery={gallery} birthDay={birthDay} deathDay={deathDay} descr={descr}  volunteer={volunteer}/>
    </div>
  );
};

export default VeteranPage;
