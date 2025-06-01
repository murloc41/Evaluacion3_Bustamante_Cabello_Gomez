import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ background: '#e75480', padding: '1rem 0', marginBottom: 24 }}>
    <nav style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
      <Link to="/productos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Productos</Link>
      <Link to="/sobre-nosotros" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Sobre Nosotros</Link>
      <Link to="/preguntas-frecuentes" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Preguntas Frecuentes</Link>
      <Link to="/carrito" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Carrito</Link>
      <Link to="/contacto" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</Link>
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          background: '#25D366',
          padding: '0.3rem 0.8rem',
          borderRadius: 6
        }}
      >
        WhatsApp
      </a>
    </nav>
  </header>
);

export default Header;