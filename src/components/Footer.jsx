import React from "react";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#235c4e",
        color: "white",
        padding: "15px",
        textAlign: "left",
        position: "fixed",
        bottom: 0,
        left: "0px", // Ajusta este valor para que coincida con el ancho de tu sidebar
        width: "calc(100% - 1px)", // Ajusta el width para que ocupe el espacio disponible, sin cubrir la sidebar
        zIndex: 1000,
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.4)", // Sombra para destacarlo
      }}
    >
      <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
        {/* Logo 1 */}
        <img
        
          src="src/iconos/logo.png" // Ruta de tu primer logo
          alt="Logo 1"
          style={{
            height: "80px", // Tamaño del logo
            marginRight: "  0px", // Espacio entre el logo y el texto
          }}
        />
        <div style={{ 
  display: "flex",
  flexDirection: "row", 
  justifyContent: "space-between", 
  width: "100%", 
  flexWrap: "wrap", // Permite que los elementos se acomoden en pantallas pequeñas
  textAlign: "left" 
}}>
  {/* Texto centrado */}
  <div style={{
    flex: "1",
    minWidth: "1000px", // Evita que se achique demasiado en pantallas pequeña. 
    margin: "10px 0", 
    textAlign:"center"   
  }}>
    <p style={{ margin: 0, fontSize: "10px" }}> 
      <strong>¿Que es Gob.mx?</strong> <br/> Gob.mx es la plataforma digital del gobierno de México que reúne información, trámites y servicios de diversas dependencias<br/>federales en un solo sitio. Su objetivo es facilitar el acceso a la ciudadanía, agilizar gestiones<br/>y mejorar la transparencia gubernamental. A través del portal, los usuarios pueden consultar noticias oficiales,<br/>realizar trámites en línea y acceder a datos abiertos del gobierno.
    </p>
  </div>
  {/* Texto alineado a la derecha */}
  <div style={{ 
    flex: "1", 
    minWidth: "200px", 
    maxWidth: "100px", 
    margin: "10px auto", 
    textAlign: "center" 
  }}>
    <p style={{ margin: 0, fontSize: "10px" }}>
      <br/>Enlaces <br /> 
      Gob.mx: <a href="https://edomex.gob.mx">gob.mx</a>
      <br/>
      SEP: <a href="https://www.gob.mx/sep">SEP</a>
      <br/>
    </p>
  </div>
</div>
      </div>
    </div>
  );
};
export default Footer;