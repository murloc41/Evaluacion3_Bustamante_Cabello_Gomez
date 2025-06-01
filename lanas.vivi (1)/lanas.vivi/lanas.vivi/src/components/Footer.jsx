import React from 'react';

const Footer = () => (
  <footer
    style={{
      background: '#f8fafc',
      color: '#888',
      textAlign: 'center',
      padding: '1.5rem 0',
      borderTop: '1px solid #eee',
      marginTop: '2rem',
      fontSize: '1rem'
    }}
  >
    <div>
      © {new Date().getFullYear()} teje_lanas.vivi &middot; Síguenos en
      <a
        href="https://instagram.com/teje_lanas.vivi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#e75480', marginLeft: 8, textDecoration: 'none', fontWeight: 'bold' }}
      >
        Instagram
      </a>
    </div>
    <div style={{ marginTop: 8 }}>
      Contacto: <a href="mailto:contacto@tejelanasvivi.cl" style={{ color: '#25D366', textDecoration: 'none' }}>contacto@tejelanasvivi.cl</a>
    </div>
  </footer>
);

export default Footer;