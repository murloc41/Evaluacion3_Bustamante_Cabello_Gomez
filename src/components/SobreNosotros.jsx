import React, { useEffect, useState } from 'react';

const SobreNosotros = () => {
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

  if (loading) return <p style={{ textAlign: 'center', fontSize: 22, color: '#e75480', marginTop: 40 }}>Cargando información...</p>;
  if (error) return <p style={{ textAlign: 'center', fontSize: 20, color: 'red', marginTop: 40 }}>Error: {error}</p>;

  return (
    <section style={{
      maxWidth: 750,
      margin: '2rem auto',
      background: 'linear-gradient(120deg, #ffe0ec 0%, #f8fafc 100%)',
      borderRadius: 20,
      padding: 40,
      boxShadow: '0 4px 24px rgba(231,84,128,0.10)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Emoji decorativo grande de fondo */}
      <span style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 180,
        opacity: 0.04,
        zIndex: 0,
        pointerEvents: 'none'
      }}>🧶</span>
      {/* Frase inspiradora */}
      <div style={{
        fontSize: 22,
        color: '#e75480',
        fontFamily: 'cursive',
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 1,
        zIndex: 1,
        position: 'relative'
      }}>
        “Tejer es abrazar con hilos el corazón de quien recibe” <span role="img" aria-label="corazón">❤️</span>
      </div>
      {/* Imagen decorativa */}
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80"
        alt="Tejido artesanal"
        style={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 18,
          margin: '0 auto 1.5rem auto',
          boxShadow: '0 2px 12px rgba(231,84,128,0.13)',
          display: 'block',
          zIndex: 1,
          position: 'relative'
        }}
      />
      <h2 style={{
        color: '#e75480',
        fontFamily: 'cursive',
        fontSize: 34,
        marginBottom: 18,
        background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        zIndex: 1,
        position: 'relative'
      }}>
        Sobre Nosotros <span role="img" aria-label="tejido">🧶</span>
      </h2>
      {/* Separador decorativo */}
      <div style={{
        width: 80,
        height: 4,
        background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
        borderRadius: 2,
        margin: '0 auto 22px auto',
        zIndex: 1,
        position: 'relative'
      }} />
      <p style={{
        fontSize: 19,
        color: '#444',
        lineHeight: 1.7,
        zIndex: 1,
        position: 'relative',
        animation: 'fadeIn 1.2s'
      }}>
        {info}
      </p>
      {/* Detalles decorativos */}
      <span style={{
        position: 'absolute',
        left: 18,
        top: 18,
        fontSize: 48,
        opacity: 0.10,
        zIndex: 1
      }}>🧶</span>
      <span style={{
        position: 'absolute',
        right: 28,
        bottom: 18,
        fontSize: 54,
        opacity: 0.09,
        zIndex: 1
      }}>🪡</span>
      {/* Animación simple */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </section>
  );
};

export default SobreNosotros;