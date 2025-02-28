import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCargaMasivaAlumnos, setShowCargaMasivaAlumnos] = useState(false);
  const [showCargaMasivaDocentes, setShowCargaMasivaDocentes] = useState(false);

  const handleOptionClick = (option) => {
    setShowForm(option === "Lista de Alumnos");
    setShowCargaMasivaAlumnos(option === "Carga Masiva de Alumnos");
    setShowCargaMasivaDocentes(option === "Carga Masiva de Docentes");
  };

  return (
    <div className="container">
      <div className="sidebars">
        <Sidebar className="sidebar-left" onOptionClick={handleOptionClick} />
        <div className="content">
          <Header />
          <Card 
            showForm={showForm} 
            showCargaMasivaAlumnos={showCargaMasivaAlumnos} 
            showCargaMasivaDocentes={showCargaMasivaDocentes} 
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
