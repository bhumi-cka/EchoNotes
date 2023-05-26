import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Record from "./record.jsx";
import LandingPage from "./landingPage.jsx";

function App() {
  return (
    <div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/record" element={<Record />} />
        </Routes>
    </div>
  );
}

export default App;
