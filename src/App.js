import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Bannar from "./Components/Bannar";
import Hero from "./Components/Hero";
import EmployeeDatabase from "./Components/EmployeeDatabase"; // Import the EmployeeDatabase component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Bannar />
              <Hero />
            </div>
          }
        />
        <Route path="/fillForm" element={<Form />} />
        <Route path="/employee-database" element={<EmployeeDatabase />} /> {/* Add Route for EmployeeDatabase */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
