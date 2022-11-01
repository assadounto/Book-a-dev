import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Developer from "./Developer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
