import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import { Route, Routes } from "react-router";
import Bannar from "./Components/Bannar";
import Hero from "./Components/Hero";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
