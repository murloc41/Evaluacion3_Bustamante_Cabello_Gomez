import React, { useEffect, useState } from 'react';

const SobrenosotrosAPI = () => {
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', {
      headers: {
        Authorization: 'Bearer ipss.get'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar la información: ' + res.status);
        return res.json();
      })
      .then(data => {
        setInfo(data?.data || '');
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: '#e75480', fontSize: 22 }}>Cargando información...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>Error: {error}</p>;

  return (
    <section style={{
      maxWidth: 700,
      margin: '2rem auto',
      background: 'linear-gradient(120deg, #ffe0ec 0%, #f8fafc 100%)',
      borderRadius: 20,
      padding: 40,
      boxShadow: '0 4px 24px rgba(231,84,128,0.10)',
      textAlign: 'center'
    }}>
      <h2 style={{
        color: '#e75480',
        fontFamily: 'cursive',
        fontSize: 34,
        marginBottom: 18
      }}>
        Sobre Nosotros
      </h2>
      <p style={{ fontSize: 19, color: '#444', lineHeight: 1.7 }}>
        {info}
      </p>
    </section>
  );
};

export default SobrenosotrosAPI;