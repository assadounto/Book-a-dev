import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Developer from "./redux/developer/Developer";
import MainPage from "./redux/developer/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
