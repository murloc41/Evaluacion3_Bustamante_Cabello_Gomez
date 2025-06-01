import React, { useEffect, useState } from 'react';

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/', {
      headers: {
        Authorization: 'Bearer ipss.get'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar las preguntas: ' + res.status);
        return res.json();
      })
      .then(data => {
        setPreguntas(Array.isArray(data?.data) ? data.data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: '#e75480', fontSize: 22 }}>Cargando preguntas...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>Error: {error}</p>;

  return (
    <section style={{
      maxWidth: 750,
      margin: '2.5rem auto',
      background: 'linear-gradient(120deg, #ffe0ec 0%, #f8fafc 100%)',
      borderRadius: 24,
      padding: 40,
      boxShadow: '0 8px 32px rgba(231,84,128,0.13)',
      position: 'relative'
    }}>
      <span style={{
        position: 'absolute', left: 30, top: 20, fontSize: 70, opacity: 0.08, zIndex: 0
      }}>🧶</span>
      <span style={{
        position: 'absolute', right: 40, bottom: 20, fontSize: 80, opacity: 0.07, zIndex: 0
      }}>🪡</span>
      <h2 style={{
        color: '#e75480',
        marginBottom: 18,
        textAlign: 'center',
        fontFamily: 'cursive',
        fontSize: 36,
        letterSpacing: 1,
        background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
      }}>
        Preguntas Frecuentes <span role="img" aria-label="preguntas">❓</span>
      </h2>
      <p style={{
        color: '#666',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 1.7
      }}>
        Aquí respondemos las dudas más comunes sobre nuestros productos, compras y envíos.<br />
        Si tienes otra pregunta, ¡no dudes en contactarnos! Queremos que tu experiencia sea fácil y transparente.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {preguntas.map((item, idx) => (
          <li
            key={item.id}
            style={{
              marginBottom: 28,
              background: idx % 2 === 0 ? '#fff' : '#f9f1f5',
              borderRadius: 16,
              padding: '1.5rem 1.7rem',
              boxShadow: '0 2px 12px rgba(231,84,128,0.08)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 18,
              borderLeft: '6px solid #e75480',
              position: 'relative'
            }}
          >
            <span style={{
              fontSize: 34,
              marginTop: 2,
              color: '#e75480',
              filter: 'drop-shadow(0 2px 4px #ffe0ec)'
            }}>❓</span>
            <div>
              <div style={{
                fontWeight: 'bold',
                color: '#e75480',
                fontSize: 20,
                marginBottom: 6,
                fontFamily: 'cursive'
              }}>
                {item.titulo}
              </div>
              <div style={{
                color: '#444',
                fontSize: 17,
                lineHeight: 1.6,
                background: '#f8fafc',
                borderRadius: 8,
                padding: '0.7rem 1rem',
                marginTop: 2
              }}>
                {item.respuesta}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div style={{
        background: '#f8fafc',
        borderRadius: 14,
        padding: '1.3rem 1.7rem',
        margin: '2.5rem 0 1.5rem 0',
        color: '#e75480',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(231,84,128,0.06)'
      }}>
        <span role="img" aria-label="tip">💡</span> Consejo: Si buscas un regalo especial, ¡pregunta por nuestros empaques personalizados y recomendaciones!
      </div>
      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <span style={{ color: '#e75480', fontWeight: 'bold', fontSize: 19 }}>
          ¿Tienes otra pregunta?
        </span>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-principal"
          style={{
            color: '#fff',
            display: 'inline-block',
            marginLeft: 12,
            background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
            borderRadius: 30,
            padding: '0.7rem 1.6rem',
            fontWeight: 'bold',
            fontSize: 17,
            boxShadow: '0 2px 8px rgba(231,84,128,0.10)',
            textDecoration: 'none'
          }}
        >
          ¡Escríbenos por WhatsApp! 💬
        </a>
      </div>
      <p style={{
        color: '#666',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 0
      }}>
        <span role="img" aria-label="lana">🧶</span> En Lanas Vivi queremos que te sientas acompañado en todo momento. ¡Gracias por confiar en nuestro trabajo artesanal!
      </p>
    </section>
  );
};

export default PreguntasFrecuentes;