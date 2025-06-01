import React, { useEffect, useState } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      headers: {
        Authorization: 'Bearer ipss.get'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los productos: ' + res.status);
        return res.json();
      })
      .then(data => {
        setProductos(Array.isArray(data?.data?.productos) ? data.data.productos : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', fontSize: 22, color: '#e75480', marginTop: 40 }}>Cargando productos...</p>;
  if (error) return <p style={{ textAlign: 'center', fontSize: 20, color: 'red', marginTop: 40 }}>Error: {error}</p>;

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '2.5rem auto',
        padding: '2.5rem 1rem 3rem 1rem',
        background: 'linear-gradient(90deg, #ffe0ec 0%, #f8fafc 100%)',
        borderRadius: 32,
        boxShadow: '0 8px 32px rgba(231,84,128,0.13)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decoración de fondo */}
      <span style={{
        position: 'absolute', left: 40, top: 30, fontSize: 80, opacity: 0.08, zIndex: 0
      }}>🧶</span>
      <span style={{
        position: 'absolute', right: 60, bottom: 30, fontSize: 90, opacity: 0.07, zIndex: 0
      }}>🪡</span>
      <span style={{
        position: 'absolute', left: '45%', top: '80%', fontSize: 60, opacity: 0.09, zIndex: 0
      }}>🧵</span>

      <h2 style={{
        color: '#e75480',
        fontFamily: 'cursive',
        fontSize: 40,
        marginBottom: 28,
        letterSpacing: 1,
        background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
      }}>
        🧶 Catálogo de Productos
      </h2>
      <div style={{
        display: 'flex',
        gap: 36,
        flexWrap: 'wrap',
        justifyContent: 'center',
        zIndex: 1,
        position: 'relative'
      }}>
        {Array.isArray(productos) && productos.length > 0 ? (
          productos.map(p => (
            <div
              key={p.id}
              style={{
                border: '2px solid #e75480',
                borderRadius: 22,
                padding: 22,
                width: 290,
                background: 'linear-gradient(120deg, #fff 80%, #ffe0ec 100%)',
                boxShadow: '0 4px 18px rgba(231,84,128,0.10)',
                marginBottom: 24,
                transition: 'transform 0.18s, box-shadow 0.18s',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(231,84,128,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(231,84,128,0.10)';
              }}
            >
              <img
                src={p.imgs?.[0] || 'https://via.placeholder.com/250x150?text=Sin+Imagen'}
                alt={p.nombre || 'Producto'}
                style={{
                  width: '100%',
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: 14,
                  marginBottom: 14,
                  boxShadow: '0 2px 12px rgba(231,84,128,0.13)'
                }}
              />
              <h3 style={{
                color: '#e75480',
                fontSize: 24,
                margin: '12px 0 8px 0',
                fontFamily: 'cursive',
                fontWeight: 'bold'
              }}>{p.nombre}</h3>
              <p style={{
                color: '#444',
                fontSize: 16,
                marginBottom: 10,
                minHeight: 48
              }}>{p.descripcion}</p>
              <p style={{
                fontWeight: 'bold',
                color: '#25D366',
                fontSize: 20,
                marginBottom: 10,
                background: '#f9f1f5',
                borderRadius: 8,
                display: 'inline-block',
                padding: '0.4rem 1.1rem'
              }}>
                Precio: {p.precio?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
              </p>
              {p.tallas?.length > 0 && (
                <p style={{
                  color: '#e75480',
                  fontWeight: 'bold',
                  marginBottom: 4,
                  fontSize: 15
                }}>
                  Tallas: <span style={{ color: '#444', fontWeight: 'normal' }}>{p.tallas.join(', ')}</span>
                </p>
              )}
              {p.colores?.length > 0 && (
                <p style={{
                  color: '#e75480',
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                  Colores: <span style={{ color: '#444', fontWeight: 'normal' }}>{p.colores.join(', ')}</span>
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: '#888', fontSize: 20 }}>No hay productos para mostrar.</p>
        )}
      </div>
    </section>
  );
};

export default Productos;
