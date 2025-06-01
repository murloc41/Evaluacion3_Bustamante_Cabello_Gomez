import React, { useState } from 'react';

const metodos = [
  { nombre: 'Webpay', descripcion: 'Tarjeta de crédito/débito', color: '#e75480', url: 'https://webpay.cl/' },
  { nombre: 'Transferencia Bancaria', descripcion: 'Banco Estado, Santander, BCI, etc.', color: '#007bff', url: null },
  { nombre: 'Billetera Electrónica', descripcion: 'Mach, Tenpo, etc.', color: '#25D366', url: 'https://www.mach.cl/' },
  { nombre: 'Pago en Efectivo', descripcion: 'Al retirar', color: '#ff9800', url: null },
];

const bancos = [
  { nombre: 'Banco de Chile', url: 'https://www.bancochile.cl/' },
  { nombre: 'Banco Estado', url: 'https://www.bancoestado.cl/' },
  { nombre: 'Santander', url: 'https://www.santander.cl/' },
  { nombre: 'BCI', url: 'https://www.bci.cl/' },
  // Agrega más bancos si lo necesitas
];

const Pago = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  const handleMetodoPago = (idx) => {
    setSeleccionado(idx);
    const metodo = metodos[idx];
    if (metodo.url) {
      window.open(metodo.url, '_blank');
    }
  };

  const handleBanco = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: 12, padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Métodos de Pago</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {metodos.map((m, idx) => (
          <button
            key={m.nombre}
            onClick={() => handleMetodoPago(idx)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              background: seleccionado === idx ? m.color : '#f4f4f4',
              color: seleccionado === idx ? '#fff' : '#333',
              border: seleccionado === idx ? `2px solid ${m.color}` : '2px solid #e0e0e0',
              borderRadius: 10,
              padding: '1rem 1.5rem',
              fontSize: 18,
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: seleccionado === idx ? '0 2px 12px rgba(231,84,128,0.10)' : 'none'
            }}
          >
            {m.nombre}
            <span style={{ fontWeight: 400, fontSize: 15, marginTop: 4 }}>{m.descripcion}</span>
          </button>
        ))}
      </div>

      {/* Mostrar bancos si selecciona Transferencia Bancaria */}
      {seleccionado === 1 && (
        <div style={{ marginTop: 28 }}>
          <h3 style={{ color: '#007bff', marginBottom: 12, fontSize: 20 }}>Selecciona tu banco:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {bancos.map(banco => (
              <button
                key={banco.nombre}
                onClick={() => handleBanco(banco.url)}
                style={{
                  background: '#fff',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  borderRadius: 8,
                  padding: '0.7rem 1.5rem',
                  fontWeight: 'bold',
                  fontSize: 16,
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s'
                }}
              >
                {banco.nombre}
              </button>
            ))}
          </div>
        </div>
      )}

      <p style={{ marginTop: 28, color: '#e75480', fontWeight: 'bold', fontSize: 17 }}>
        {seleccionado !== null
          ? `Has seleccionado: ${metodos[seleccionado].nombre}`
          : 'Selecciona tu método de pago preferido para continuar.'}
      </p>
    </section>
  );
};

export default Pago;