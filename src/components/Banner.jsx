import React from 'react';

const Banner = () => (
  <section
    style={{
      background: 'linear-gradient(90deg, #ffe0ec 0%, #f8fafc 100%)',
      padding: '3.5rem 1rem 3rem 1rem',
      textAlign: 'center',
      borderRadius: '0 0 32px 32px',
      marginBottom: '2.5rem',
      boxShadow: '0 4px 18px rgba(231,84,128,0.10)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <h2 style={{
      fontSize: '2.8rem',
      color: '#e75480',
      marginBottom: '1.1rem',
      fontFamily: 'cursive',
      letterSpacing: 1
    }}>
      🧶 ¡Bienvenida a <span style={{ color: '#25D366' }}>teje_lanas.vivi</span>! ✨
    </h2>
    <p style={{
      fontSize: '1.25rem',
      color: '#444',
      maxWidth: '650px',
      margin: '0 auto',
      lineHeight: 1.7,
      fontWeight: 500
    }}>
      Descubre <span style={{ color: '#e75480', fontWeight: 'bold' }}>productos únicos</span> para tus tejidos, 
      inspírate con nuestra pasión artesanal y conecta con una comunidad llena de color y calidez.<br />
      <span style={{
        color: '#fff',
        background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
        padding: '0.4rem 1.2rem',
        borderRadius: 18,
        fontWeight: 'bold',
        marginTop: 12,
        display: 'inline-block',
        boxShadow: '0 2px 8px rgba(231,84,128,0.10)'
      }}>
        💬 ¡Haz tu pedido por WhatsApp o revisa nuestro catálogo!
      </span>
    </p>
    {/* Detalles decorativos */}
    <span style={{
      position: 'absolute',
      left: 32,
      top: 18,
      fontSize: 48,
      opacity: 0.13
    }}>🧵</span>
    <span style={{
      position: 'absolute',
      right: 38,
      bottom: 18,
      fontSize: 54,
      opacity: 0.11
    }}>🪡</span>
  </section>
);

export default Banner;