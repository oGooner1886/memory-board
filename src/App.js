import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
