const Header = () => {
  return (
    <>
      <header
        style={{
          background: "#235c4e",
          color: "white",
          padding: "15px",
          textAlign: "left",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "70px",
          zIndex: "100",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src="src/iconos/logo cecyte.png"
          alt="Logo CECyTE"
          style={{
            height: "50px",
            marginRight: "15px",
          }}
        />
        <img
          src="src/iconos/SicoeIconoAlumno.png"
          alt="SicoeIconoAlumno"
          style={{
            height: "60px ",
            marginRight: "50px",
          }}
        />
      </header>
      <header
        style={{
          background: "#235c4e",
          color: "white",
          padding: "5px",
          textAlign: "left",
          position: "fixed",
          top: "65px",
          left: "0",
          width: "100%",
          height: "60px",
          zIndex: "99",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       <span
  style={{
    marginLeft: "auto", // Alineación centrada para mantenerlo a la derecha en pantallas pequeñas
    marginTop: "5px",
    cursor: "pointer",
    padding: "10px 20px", // Aumenta el padding horizontal
    borderRadius: "15px",
    backgroundColor: "#235c4e",
    color: "white",
    fontSize: "1rem", // Usar tamaño relativo de fuente para mayor flexibilidad
    textAlign: "center",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center", // Alineación vertical del contenido
    justifyContent: "center", // Alineación horizontal
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#235c4e";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#235c4e"; 
  }}
  onClick={() => {
    alert("Cerrar sesión"); 
  }}
>
  <img
    src="src/iconos/Cerrar Sesion.png"
    alt="Cerrar Sesion"
    style={{
      height: "1.5rem", // Usa una unidad relativa para la imagen
      marginRight: "8px", // Ajuste de margen para un mejor espaciado
    }}
  />
</span>
      </header>
    </>
  );
};
export default Header;