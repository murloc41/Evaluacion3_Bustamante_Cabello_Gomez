import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Productos from './components/productos';
import Carrito from './components/carrito'; // Importamos el carrito
import Pago from './components/Pago';
import SobreNosotros from './components/SobreNosotros';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Inicio from './components/Inicio';
import ProductosAPI from './components/ProductosAPI';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Banner /><Inicio /></>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/productos-api" element={<ProductosAPI />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;