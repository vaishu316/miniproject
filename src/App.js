import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomsPage from "./components/facilities"; 
import BookingConfirmation from "./components/BookingConfirmation";
import ODForm from "./components/ODForm";
import HostelGatePass from "./components/HostelGatePass";
import Events from "./components/Events";




function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold"><center>Welcome to RMK Hall Booking System</center></h1>
        <p className="mt-2"><center>Use the navigation bar to explore availability, facilities, and book halls.</center></p>
      </main>
      <Routes>
        <Route path="/facilities" element={<RoomsPage />} />
        <Route path="/hall-bookings" element={<BookingConfirmation />} />
        <Route path="/od-form" element={<ODForm />} />
        <Route path="/hostel-gatepass" element={<HostelGatePass />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
};

export default App;