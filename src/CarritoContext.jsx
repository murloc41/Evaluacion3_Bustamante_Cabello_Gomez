import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.nombre === producto.nombre);
      if (existe) {
        return prev.map(item =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  const eliminarDelCarrito = (nombre) => {
    setCarrito(prev => prev.filter(item => item.nombre !== nombre));
  };

  const limpiarCarrito = () => setCarrito([]);

  const actualizarCantidad = (nombre, cantidad) => {
    setCarrito(prev =>
      prev.map(item =>
        item.nombre === nombre ? { ...item, cantidad: Number(cantidad) } : item
      )
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, actualizarCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
};