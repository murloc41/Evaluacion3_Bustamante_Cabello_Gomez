import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imagenes = [
  {
    url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    texto: 'Ponchos tejidos a mano con amor',
  },
  {
    url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    texto: 'Chalecos de lana únicos y cálidos',
  },
  {
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    texto: 'Bufandas artesanales llenas de color',
  },
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    texto: 'Mantas decorativas para tu hogar',
  },
];

const Inicio = () => {
  const [indice, setIndice] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [indice]);

  const anterior = () => setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  const siguiente = () => setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));

  return (
    <section
      style={{
        maxWidth: 850,
        margin: '2rem auto',
        borderRadius: 22,
        padding: 38,
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(231,84,128,0.10)',
        position: 'relative',
        background: 'linear-gradient(120deg, #ffe0ec 0%, #f8fafc 100%)',
        overflow: 'hidden'
      }}
    >
      <h1 style={{
        color: '#e75480',
        fontSize: 44,
        marginBottom: 10,
        fontFamily: 'cursive',
        letterSpacing: 1
      }}>
        ¡Bienvenido a Lanas Vivi! <span role="img" aria-label="lana">🧶</span>
      </h1>
      <p style={{ fontSize: 23, color: '#444', marginBottom: 18, fontWeight: 500 }}>
        <span role="img" aria-label="corazón">❤️</span> Donde cada prenda cuenta una historia y cada hilo lleva cariño del sur de Chile.
      </p>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 18, lineHeight: 1.7 }}>
        Sumérgete en un mundo de <span style={{ color: '#e75480', fontWeight: 'bold' }}>colores, texturas y tradición</span>. 
        Aquí encontrarás productos tejidos a mano, únicos y llenos de vida, perfectos para regalar o disfrutar en familia.<br />
        <span style={{ color: '#25D366', fontWeight: 'bold' }}>¡Apoya lo local y lleva contigo un pedacito de nuestra tierra!</span>
      </p>
      <div style={{
        margin: '1.5rem 0 2.5rem 0',
        fontSize: 18,
        color: '#e75480',
        fontWeight: 'bold'
      }}>
        <span role="img" aria-label="estrella">✨</span>
        Descubre la calidez de lo hecho a mano, la creatividad de nuestras tejedoras y la magia de los productos que nacen del corazón.
      </div>
      {/* Carrusel de imágenes */}
      <div style={{ position: 'relative', margin: '2rem 0', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
        <img
          src={imagenes[indice].url}
          alt={imagenes[indice].texto}
          style={{
            width: '100%',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(231,84,128,0.15)',
            height: 320,
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          color: '#fff',
          background: 'rgba(231,84,128,0.85)',
          padding: '0.7rem',
          borderRadius: '0 0 18px 18px',
          fontWeight: 'bold',
          fontSize: 22,
          letterSpacing: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.18)'
        }}>
          {imagenes[indice].texto}
        </div>
        <button
          onClick={anterior}
          style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            background: '#e75480',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 38,
            height: 38,
            fontSize: 24,
            cursor: 'pointer',
            opacity: 0.85,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
          }}
          aria-label="Anterior"
        >&#8592;</button>
        <button
          onClick={siguiente}
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            background: '#e75480',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 38,
            height: 38,
            fontSize: 24,
            cursor: 'pointer',
            opacity: 0.85,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
          }}
          aria-label="Siguiente"
        >&#8594;</button>
        {/* Indicadores de carrusel */}
        <div style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 8
        }}>
          {imagenes.map((_, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: i === indice ? '#e75480' : '#fff',
                border: '2px solid #e75480',
                margin: '0 2px',
                transition: 'background 0.2s'
              }}
            />
          ))}
        </div>
      </div>
      {/* Características */}
      <div style={{
        margin: '2.5rem 0 1.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        gap: 28,
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#f9f1f5',
          borderRadius: 12,
          padding: '1.2rem 1.5rem',
          boxShadow: '0 2px 8px rgba(231,84,128,0.06)',
          fontSize: 16,
          color: '#e75480',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 150
        }}>
          <span style={{ fontSize: 30 }}>🧵</span>
          Detalles únicos
        </div>
        <div style={{
          background: '#f9f1f5',
          borderRadius: 12,
          padding: '1.2rem 1.5rem',
          boxShadow: '0 2px 8px rgba(231,84,128,0.06)',
          fontSize: 16,
          color: '#e75480',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 150
        }}>
          <span style={{ fontSize: 30 }}>🌈</span>
          Colores que inspiran
        </div>
        <div style={{
          background: '#f9f1f5',
          borderRadius: 12,
          padding: '1.2rem 1.5rem',
          boxShadow: '0 2px 8px rgba(231,84,128,0.06)',
          fontSize: 16,
          color: '#e75480',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 150
        }}>
          <span style={{ fontSize: 30 }}>🤲</span>
          100% hecho a mano
        </div>
        <div style={{
          background: '#f9f1f5',
          borderRadius: 12,
          padding: '1.2rem 1.5rem',
          boxShadow: '0 2px 8px rgba(231,84,128,0.06)',
          fontSize: 16,
          color: '#e75480',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 150
        }}>
          <span style={{ fontSize: 30 }}>🎁</span>
          Ideal para regalar
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <Link
          to="/productos"
          className="btn-principal"
          style={{
            fontSize: 22,
            padding: '0.9rem 2.5rem'
          }}
        >
          ¡Ver productos!
        </Link>
      </div>
      <p style={{ marginTop: 34, color: '#e75480', fontSize: 17 }}>
        <span role="img" aria-label="manos">🙌</span>
        Gracias por apoyar el trabajo local y artesanal.<br />
        <span style={{ color: '#25D366', fontWeight: 'bold' }}>¡Te invitamos a recorrer y enamorarte de cada creación!</span>
      </p>
      {/* Detalles decorativos */}
      <span style={{
        position: 'absolute',
        left: 24,
        top: 18,
        fontSize: 48,
        opacity: 0.10
      }}>🧶</span>
      <span style={{
        position: 'absolute',
        right: 28,
        bottom: 18,
        fontSize: 54,
        opacity: 0.09
      }}>🪡</span>
    </section>
  );
};

export default Inicio;