import React, { useState } from "react";
import * as XLSX from "xlsx";
import DocentesTable from "./DocentesTable";
import Form from "./Form";

const CargaMasivaDocentes = () => {
  const [datosExcel, setDatosExcel] = useState([]);
  const [data, setData] = useState([
    {
      nombreCompleto: "Juan Pérez López",
      curp: "PENZYOGIOTHONA",
      cedula: "123456789",
      celular: "55 1234 5678",
      correo: "juan.perez@example.com",
      fechaIngreso: "2024-01-15",
    },
    {
      nombreCompleto: "Maria Elena García Rodríguez",
      curp: "CARMERSOSTAHCOA",
      cedula: "9876543210",
      celular: "55 5555 6666",
      correo: "maria.garcia@ejemplo.com.mx",
      fechaIngreso: "2024-01-15",
    },
  ]);

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

        // Mapeo de datos del Excel a la estructura de la tabla
        const formattedData = jsonData.slice(1).map((row) => ({
          nombreCompleto: row[0] || "",
          curp: row[1] || "",
          cedula: row[2] || "",
          celular: row[3] || "",
          correo: row[4] || "",
          fechaIngreso: row[5] || "",
        }));

        setData(formattedData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="carga-masiva-docentes">
      <h3>Instrucciones para Carga de Informacion</h3>
      
      <DocentesTable data={data} />
      <Form onImportarExcel={handleImportarExcel} />
    </div>
  );
};

export default CargaMasivaDocentes;
