import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Developer from "./developer/Developer";
import MainPage from "./developer/MainPage";
import AddBooking from "./booking/AddBooking";
import Bookings from "./booking/Bookings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers/:id" element={<Developer />} />
        <Route path="/add-booking/:id" element={<AddBooking />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
