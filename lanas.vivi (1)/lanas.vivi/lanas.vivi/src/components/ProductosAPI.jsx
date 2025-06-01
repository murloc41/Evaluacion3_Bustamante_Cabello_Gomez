import React, { useEffect, useState } from 'react';

const ProductosAPI = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los productos');
        return res.json();
      })
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div>Cargando productos...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <section style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 18, padding: 32 }}>
      <h2 style={{ color: '#e75480', fontFamily: 'cursive', fontSize: 32, marginBottom: 18 }}>
        Productos y Servicios desde la API
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {productos.map((prod) => (
          <div key={prod.id} style={{
            background: '#f9f1f5',
            borderRadius: 12,
            padding: 18,
            boxShadow: '0 2px 8px rgba(231,84,128,0.08)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#e75480', fontSize: 20, marginBottom: 8 }}>{prod.name}</h4>
            <div style={{ color: '#444', fontSize: 16, marginBottom: 8 }}>{prod.description}</div>
            {prod.price && (
              <div style={{ color: '#28a745', fontWeight: 'bold', fontSize: 18 }}>
                {Number(prod.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosAPI;