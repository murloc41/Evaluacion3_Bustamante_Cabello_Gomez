import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../CarritoContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, limpiarCarrito, actualizarCantidad } = useCarrito();
  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(120deg, #ffe0ec 0%, #f8fafc 100%)',
      minHeight: '100vh'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#e75480',
        fontFamily: 'cursive',
        fontSize: 38,
        marginBottom: 10,
        letterSpacing: 1
      }}>
        🛒 ¡Tu Carrito de Compras!
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: 19,
        margin: '0 auto 28px auto',
        background: '#fff0f6',
        borderRadius: 14,
        padding: '0.7rem 1.2rem',
        maxWidth: 480,
        boxShadow: '0 2px 8px rgba(231,84,128,0.07)'
      }}>
        Revisa tus productos antes de pagar.<br />
        Puedes ajustar cantidades, eliminar lo que desees o seguir explorando. <span role="img" aria-label="corazón">🧶</span>
      </p>

      <section style={{
        maxWidth: 750,
        margin: '2rem auto',
        background: '#fff',
        borderRadius: 20,
        padding: 36,
        boxShadow: '0 4px 24px rgba(231,84,128,0.10)',
        position: 'relative'
      }}>
        <h3 style={{
          color: '#e75480',
          marginBottom: 18,
          fontFamily: 'cursive',
          fontSize: 28
        }}>
          Detalle de tu carrito <span role="img" aria-label="bolsa">🛍️</span>
        </h3>

        {carrito.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {carrito.map(item => (
              <li
                key={item.nombre}
                style={{
                  background: '#f9f1f5',
                  padding: '1.2rem 1rem',
                  marginBottom: '1.2rem',
                  borderRadius: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                  boxShadow: '0 2px 8px rgba(231,84,128,0.08)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    fontSize: 28,
                    background: '#fff0f6',
                    borderRadius: '50%',
                    padding: '0.3rem 0.7rem',
                    marginRight: 6
                  }}>🧶</span>
                  <strong style={{ color: '#e75480', fontSize: 20 }}>{item.nombre}</strong>
                </div>
                <div style={{ color: '#444', fontSize: 16 }}>
                  Precio unitario: <strong>${item.precio.toLocaleString('es-CL')}</strong>
                </div>
                <div>
                  Cantidad:{" "}
                  <select
                    value={item.cantidad}
                    onChange={(e) => actualizarCantidad(item.nombre, e.target.value)}
                    style={{
                      padding: '0.3rem 0.7rem',
                      borderRadius: 8,
                      border: '1.5px solid #e75480',
                      fontWeight: 'bold',
                      color: '#e75480',
                      background: '#fff0f6',
                      marginLeft: 6
                    }}
                  >
                    {[...Array(10).keys()].map(n => (
                      <option key={n + 1} value={n + 1}>{n + 1}</option>
                    ))}
                  </select>
                </div>
                <div style={{ color: '#666', fontSize: 16 }}>
                  Subtotal: <strong style={{ color: '#28a745' }}>{(item.precio * item.cantidad).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</strong>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(item.nombre)}
                  style={{
                    background: '#ff4d4f',
                    color: '#fff',
                    border: 'none',
                    padding: '0.4rem 1.1rem',
                    borderRadius: 10,
                    cursor: 'pointer',
                    width: 'fit-content',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 4,
                    transition: 'background 0.2s, transform 0.2s',
                    boxShadow: '0 2px 8px rgba(231,84,128,0.10)'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Eliminar ❌
                </button>
                <span style={{
                  position: 'absolute',
                  right: 18,
                  top: 12,
                  fontSize: 22,
                  opacity: 0.10
                }}>🧶</span>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{
            textAlign: 'center',
            color: '#e75480',
            fontWeight: 'bold',
            fontSize: 22,
            padding: '2.5rem 0'
          }}>
            <span role="img" aria-label="carrito vacío" style={{ fontSize: 38 }}>🛒</span>
            <br />
            ¡Tu carrito está vacío!<br />
            Agrega productos y vuelve aquí para verlos.<br />
            <span style={{
              color: '#888',
              fontWeight: 'normal',
              fontSize: 16
            }}>
              ¿Necesitas ayuda? <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>¡Escríbenos!</a>
            </span>
          </div>
        )}

        <hr style={{ margin: '2rem 0 1.2rem 0', border: 'none', borderTop: '2px dashed #e75480' }} />
        <div style={{
          fontSize: 21,
          color: '#28a745',
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center'
        }}>
          Total a pagar: {total}
        </div>

        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
          <button
            onClick={limpiarCarrito}
            className="btn-principal"
            style={{
              background: '#999',
              color: '#fff',
              minWidth: 150
            }}
          >
            Vaciar carrito 🗑️
          </button>

          <button
            onClick={() => navigate('/pago')}
            disabled={carrito.length === 0}
            className="btn-principal"
            style={{
              background: carrito.length === 0 ? '#b7e0c7' : '#28a745',
              color: '#fff',
              minWidth: 180,
              cursor: carrito.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Pagar seguro 💳
          </button>
        </div>
        <div style={{
          marginTop: 32,
          textAlign: 'center',
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: 17
        }}>
          <span role="img" aria-label="tip">💡</span> Consejo: Puedes modificar tu pedido antes de pagar. Si tienes dudas, <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>¡contáctanos por WhatsApp!</a>
        </div>
        <span style={{
          position: 'absolute',
          left: 18,
          top: 18,
          fontSize: 48,
          opacity: 0.10
        }}>🧶</span>
        <span style={{
          position: 'absolute',
          right: 28,
          bottom: 18,
          fontSize: 54,
          opacity: 0.09
        }}>🪡</span>
      </section>
    </div>
  );
};

export default Carrito;
