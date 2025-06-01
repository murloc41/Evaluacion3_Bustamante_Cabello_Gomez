import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  const productoPreseleccionado = location.state?.producto || '';

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    producto: productoPreseleccionado,
    sitioWeb: '' // honeypot
  });

  const [precio, setPrecio] = useState(null);
  const [enviado, setEnviado] = useState(false);

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
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, producto: productoPreseleccionado }));
    if (productoPreseleccionado && productos.length > 0) {
      const prod = productos.find(p => String(p.id) === String(productoPreseleccionado));
      setPrecio(prod ? prod.precio : null);
    }
  }, [productoPreseleccionado, productos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'producto') {
      const prod = productos.find(p => String(p.id) === value);
      setPrecio(prod ? prod.precio : null);
    }
  };

  const validarCorreo = (correo) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.sitioWeb !== '') {
      alert('¡Solicitud bloqueada por seguridad!');
      return;
    }

    if (!formData.nombre || !formData.correo || !formData.mensaje || !formData.producto) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    if (!validarCorreo(formData.correo)) {
      alert('Correo electrónico no válido.');
      return;
    }

    // Aquí iría el envío real
    console.log('Formulario válido, datos enviados:', formData);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div style={{ textAlign: 'center', marginTop: 60, color: '#25D366', fontSize: 22, fontWeight: 'bold' }}>
        ¡Gracias por tu mensaje! Pronto te responderemos 😊
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', minHeight: 520 }}>
      {/* Fondo decorativo */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <span style={{
          position: 'absolute', left: '5vw', top: '10vh', fontSize: 90, opacity: 0.08,
        }}>🧶</span>
        <span style={{
          position: 'absolute', right: '8vw', top: '25vh', fontSize: 70, opacity: 0.09,
        }}>🪡</span>
        <span style={{
          position: 'absolute', left: '15vw', bottom: '12vh', fontSize: 60, opacity: 0.10,
        }}>🧵</span>
        <span style={{
          position: 'absolute', right: '18vw', bottom: '8vh', fontSize: 80, opacity: 0.07,
        }}>🧶</span>
        <span style={{
          position: 'absolute', left: '40vw', top: '60vh', fontSize: 50, opacity: 0.09,
        }}>🪡</span>
      </div>
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 420,
          margin: '2.5rem auto',
          background: '#fff',
          borderRadius: 18,
          boxShadow: '0 4px 18px rgba(231,84,128,0.10)',
          padding: '2.2rem 2rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h3 style={{
          color: '#e75480',
          fontFamily: 'cursive',
          fontSize: 28,
          marginBottom: 4,
          textAlign: 'center'
        }}>
          📬 ¡Contáctanos!
        </h3>
        <p style={{
          color: '#666',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 0
        }}>
          ¿Tienes dudas, quieres un producto personalizado o necesitas ayuda? <br />
          <span style={{ color: '#25D366', fontWeight: 'bold' }}>¡Escríbenos aquí!</span>
        </p>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={{
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1.5px solid #e75480',
            fontSize: 16
          }}
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
          required
          style={{
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1.5px solid #e75480',
            fontSize: 16
          }}
        />
        <textarea
          name="mensaje"
          placeholder="Cuéntanos tu mensaje o idea"
          rows={3}
          value={formData.mensaje}
          onChange={handleChange}
          required
          style={{
            padding: '0.7rem 1rem',
            borderRadius: 8,
            border: '1.5px solid #e75480',
            fontSize: 16,
            resize: 'vertical'
          }}
        />

        <label style={{ fontWeight: 'bold', color: '#e75480', fontSize: 16 }}>
          Elige un producto:
          {cargando ? (
            <span style={{ marginLeft: 8, color: '#888', fontWeight: 'normal' }}>Cargando productos...</span>
          ) : error ? (
            <span style={{ marginLeft: 8, color: 'red', fontWeight: 'normal' }}>Error: {error}</span>
          ) : (
            <select
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              required
              style={{
                marginLeft: 8,
                padding: '0.5rem 1rem',
                borderRadius: 8,
                border: '1.5px solid #e75480',
                fontSize: 15,
                background: '#f9f1f5',
                color: '#e75480',
                fontWeight: 'bold'
              }}
            >
              <option value="">Selecciona...</option>
              {Array.isArray(productos) && productos.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} - {p.precio?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                </option>
              ))}
            </select>
          )}
        </label>

        {formData.producto && precio && (
          <div style={{
            fontWeight: 'bold',
            color: '#25D366',
            background: '#f9f1f5',
            borderRadius: 8,
            padding: '0.5rem 1rem',
            textAlign: 'center',
            fontSize: 17,
            marginTop: -8
          }}>
            Precio: ${Number(precio).toLocaleString('es-CL')}
          </div>
        )}

        {/* Honeypot oculto para bots */}
        <input
          type="text"
          name="sitioWeb"
          value={formData.sitioWeb}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #e75480 60%, #ffb6c1 100%)',
            color: '#fff',
            border: 'none',
            padding: '0.9rem 0',
            borderRadius: 30,
            fontWeight: 'bold',
            fontSize: 19,
            marginTop: 8,
            boxShadow: '0 2px 8px rgba(231,84,128,0.10)',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          Enviar mensaje ✉️
        </button>
      </form>
    </div>
  );
};

export default ContactForm;