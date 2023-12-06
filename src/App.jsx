import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Travel from "./pages/Travel";
import Education from "./pages/Education";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/education" element={<Education />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business />} />
      </Route>
    </Routes>
  );
};

export default App;
