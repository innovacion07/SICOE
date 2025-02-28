import React from 'react';
import './Everyd.css';

const DocentesTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="docentes-table">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>CURP</th>
            <th>No. Cédula</th>
            <th>Número de Celular o Telefónico</th>
            <th>Correo Electrónico</th>
            <th>Fecha de ingreso</th>
          </tr>
        </thead>
        <tbody>
          {data.map((docente, index) => (
            <tr key={index}>
              <td>{docente.nombreCompleto}</td>
              <td>{docente.curp}</td>
              <td>{docente.cedula}</td>
              <td>{docente.celular}</td>
              <td>{docente.correo}</td>
              <td>{docente.fechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocentesTable;