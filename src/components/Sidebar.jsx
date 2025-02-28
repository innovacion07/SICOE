import React, { useState } from "react";
import SidebarOption from "./SidebarOption"; // Importamos SidebarOption
import alumnosIcon from "../assets/Alumno.png";
import alumnosPressedIcon from "../assets/AlumnoP.png";
import docentesIcon from "../assets/Docente.png";
import docentesPressedIcon from "../assets/DocenteP.png";
import plantelIcon from "../assets/Plantel.png";
import carrerasIcon from "../assets/Carreras.png";
import gruposIcon from "../assets/Grupos.png";
import gruposPressedIcon from "../assets/GruposP.png";

const Sidebar3 = ({ className, onOptionClick }) => {
  const [activeOption, setActiveOption] = useState(null);

  const toggleSubOption = (option) => {
    setActiveOption(option === activeOption ? null : option);
  };

  const handleSuboptionClick = (suboption) => {
    onOptionClick(suboption.name);
  };

  const options = [
    { name: "Alumnos", icon: alumnosIcon, pressedIcon: alumnosPressedIcon },
    { name: "Docentes", icon: docentesIcon, pressedIcon: docentesPressedIcon },
    { name: "Planteles", icon: plantelIcon, pressedIcon: plantelIcon },
    { name: "Carreras", icon: carrerasIcon, pressedIcon: carrerasIcon },
    { name: "Grupos", icon: gruposIcon, pressedIcon: gruposPressedIcon },
  ];

  const suboptions = {
    Alumnos: [
      { name: "Carga Manual de Alumnos", icon: alumnosIcon },
      { name: "Carga Masiva de Alumnos", icon: alumnosIcon },
      { name: "Lista de Alumnos", icon: alumnosIcon },
    ],
    Docentes: [
      { name: "Carga Manual de Docentes", icon: docentesIcon },
      { name: "Carga Masiva de Docentes", icon: docentesIcon },
      { name: "Lista de Docentes", icon: docentesIcon },
    ],
    Planteles: [],
    Carreras: [
      { name: "Carga Masiva de Carreras", icon: carrerasIcon },
      { name: "Lista de Carreras", icon: carrerasIcon },
    ],
    Grupos: [
      { name: "Carga Manual de Grupos", icon: gruposIcon },
      { name: "Carga Masiva de Grupos", icon: gruposIcon },
      { name: "Lista de Grupos", icon: gruposIcon },
    ],
  };

  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar-title">
        <div className="sidebar-title-background">
          <img src={plantelIcon} alt="Plantel" className="sidebar-icon" />
          <span>Plantel</span>
        </div>
      </div>

      <div className="sidebar-options">
        {options.map((option, index) => (
          <SidebarOption
            key={index}
            option={option}
            activeOption={activeOption}
            toggleSubOption={toggleSubOption}
            suboptions={suboptions[option.name]}
            handleSuboptionClick={handleSuboptionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar3;
