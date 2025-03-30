import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./index.css";
import VeteranPage from "./pages/VeteranPage/VeteranPage";
import data from "./person.json";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {data.map((el) => (
          <Route
            path={`/veteran/${el.uid}`}
            element={
              <VeteranPage
                key={el.uid}
                id={el.uid}
                fullName={el.fullName}
                gallery={el.gallery}
                rank={el.rank}
                awards={el.awards}
                volunteer={el.volunteer}
                birthDay={el.birthDay}
                deathDay={el.deathDay}
                descr={el.descr}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
