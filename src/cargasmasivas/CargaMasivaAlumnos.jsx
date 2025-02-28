import React, { useState } from "react";
import * as XLSX from "xlsx";
import FilterCard from "./FilterCard";
import Instrucciones from "./Instrucciones";
import Form from "./Form";
import "./Mastyle.css";

const CargaMasivaAlumnos = () => {
  const [datosExcel, setDatosExcel] = useState([]);

  const handleImportarExcel = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setDatosExcel(jsonData);
        console.log("Datos del Excel (Alumnos):", jsonData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="carga-masiva-alumnos">
     
      <div className="formContainer">
        <FilterCard />
        <Instrucciones />
        <Form onImportarExcel={handleImportarExcel} />
      </div>
      {datosExcel.length > 0 && (
        <div>
          <h4>Datos cargados:</h4>
          <pre>{JSON.stringify(datosExcel, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CargaMasivaAlumnos;
