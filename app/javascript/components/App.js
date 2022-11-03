import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Developer from "./developer/Developer";
import MainPage from "./developer/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers/:id" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
