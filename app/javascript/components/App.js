import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Developer from "./developer/Developer";
import MainPage from "./developer/MainPage";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/developers/:id" element={<Developer />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
