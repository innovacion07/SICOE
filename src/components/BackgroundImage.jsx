import React from 'react';
import imagenFondo from './imagendefondo.png'; // ✅ Importa la imagen correctamente
const BackgroundImage = () => {
  const width = window.innerWidth;
  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: width >= 1920 ? '54%' : width >= 1366 ? '40%' : '45%', // 📌 Se mantiene grande en 1920x1080, más pequeño en laptops
    backgroundPosition: width >= 1920 ? 'right 58%' : width >= 1366 ? 'right 60%' : 'right 55%', 
    backgroundRepeat: 'no-repeat',
    opacity: 1, // 📌 Aquí se establece la transparencia (opacidad)
    pointerEvents: 'none', // 📌 Esto asegura que la imagen no interfiera con otros componentes, como botones o interacciones
  };
  return <div style={styles}></div>;
};
export default BackgroundImage;