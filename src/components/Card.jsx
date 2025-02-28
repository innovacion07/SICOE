import React, { useState, useEffect } from "react";
import ListaAlumnosForm from "../components/ListaAlumnosForm";
import CargaMasivaAlumnos from "../cargasmasivas/CargaMasivaAlumnos";
import CargaMasivaDocentes from "../cargasmasivas/CargaMasivaDocentes";

const Card = ({ showForm, showCargaMasivaAlumnos, showCargaMasivaDocentes }) => {
  const [styles, setStyles] = useState(getStyles(window.innerWidth, window.innerHeight));

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles(window.innerWidth, window.innerHeight));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.card}>
      {showForm ? (
        <ListaAlumnosForm />
      ) : showCargaMasivaAlumnos ? (
        <CargaMasivaAlumnos />
      ) : showCargaMasivaDocentes ? (
        <CargaMasivaDocentes />
      ) : (
        <h2 style={styles.title}>Selecciona una opción del menú</h2>
      )}
    </div>
  );
};

const getStyles = (width, height) => {
  return {
    card: {
      backgroundColor: "#ffffff",
      width: width > 1650 ? "70vw" : width > 1300 ? "60vw" : width > 1000 ? "50vw" : "45  vw",
      maxWidth: "90vw",
      minHeight: height > 1000 ? "70vh" : height > 768 ? "57vh" : height > 600 ? "47vh" : "40vh",
      height: 650,
      padding: width >= 768 ? "2rem" : "1rem",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      boxSizing: "border-box",
      textAlign: "center",
      marginTop: height * 0.15 + height * 0.01,
      marginLeft: width * 0.20,
    },
    title: {
      fontSize: width > 1366 ? "2.5rem" : "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  };
};

export default Card;
