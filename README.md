# Documentación general del proyecto

Este proyecto es una aplicación React que implementa diversas páginas y componentes para ofrecer una experiencia interactiva y dinámica a los usuarios. A continuación, se describe brevemente en qué consiste y cómo funciona cada una de las páginas principales:

---

## **1. Carrito (`Carrito.jsx`)**

- **Función**: Permite a los usuarios gestionar los productos añadidos al carrito de compras.

- **Características**:

  - Muestra los productos en el carrito con su cantidad y precio.

  - Calcula y muestra el total del carrito en pesos chilenos (CLP).

  - Ofrece opciones para eliminar productos, actualizar cantidades o vaciar el carrito.

  - Utiliza el contexto global (`CarritoContext`) para manejar el estado del carrito.

---

## **2. Formulario de Contacto (`ContactForm.jsx`)**

- **Función**: Permite a los usuarios enviar consultas relacionadas con los productos o servicios.

- **Características**:

  - Carga dinámicamente los productos desde una API para que el usuario pueda seleccionarlos.

  - Incluye validación básica y muestra un mensaje de confirmación tras el envío.

  - Maneja estados de carga y errores al interactuar con la API.

---

## **3. Preguntas Frecuentes (`PreguntasFrecuentes.jsx`)**

- **Función**: Muestra una lista de preguntas frecuentes (FAQ) para ayudar a los usuarios.

- **Características**:

  - Obtiene las preguntas desde una API y las presenta de manera interactiva.

  - Permite expandir o contraer las respuestas según la interacción del usuario.

  - Maneja estados de carga y errores para garantizar una experiencia fluida.

---

## **4. Productos (`productos.jsx`)**

- **Función**: Presenta un catálogo de productos con imágenes y detalles básicos.

- **Características**:

  - Muestra imágenes de los productos con un diseño atractivo y bordes redondeados.

  - Implementa efectos visuales (escala y sombras) al pasar el cursor sobre los productos.

  - Utiliza imágenes de marcador de posición si no hay imágenes disponibles para un producto.

---

## **5. Sobre Nosotros (`SobreNosotrosAPI.jsx`)**

- **Función**: Proporciona información sobre la empresa o el proyecto.

- **Características**:

  - Obtiene dinámicamente la información desde una API.

  - Presenta un título estilizado y un párrafo con la información obtenida.

  - Incluye estilos personalizados para mejorar la legibilidad y la estética.

---

## **6. Pago (

Pago.jsx

)**

- **Función**: Permite a los usuarios seleccionar un método de pago.

- **Características**:

  - Muestra una lista de métodos de pago disponibles.

  - Permite seleccionar un método y muestra un mensaje con la opción elegida.

  - Incluye estilos personalizados para los mensajes y botones.

---

## **Resumen del funcionamiento general**

1\. **Interactividad**: La aplicación utiliza React para manejar estados y eventos, ofreciendo una experiencia dinámica e interactiva.

2\. **Consumo de APIs**: Varias páginas (como `ContactForm`, `PreguntasFrecuentes` y `SobreNosotrosAPI`) obtienen datos desde APIs externas para mantener la información actualizada.

3\. **Estilo visual**: Los componentes incluyen estilos personalizados en línea para garantizar una apariencia atractiva y consistente.

4\. **Gestión de estado**: Se utilizan hooks como `useState` y `useEffect` para manejar el estado local y las interacciones con APIs.

Este proyecto combina funcionalidad, diseño y dinamismo para ofrecer una experiencia de usuario completa y eficiente.


Collecting workspace information

Aquí tienes la documentación de la estructura del proyecto:

# Estructura del Proyecto

El proyecto es una aplicación React configurada con Vite. A continuación, se describe la estructura de carpetas y archivos:

## Raíz del Proyecto

- **eslint.config.js**: Configuración de ESLint para el proyecto.

- **index.html**: Archivo HTML principal que sirve como punto de entrada para la aplicación.

- **package.json**: Archivo de configuración del proyecto que incluye dependencias, scripts y metadatos.

- **README.md**: Documentación básica del proyecto.

- **vite.config.js**: Configuración de Vite.

- **imagenes/**: Carpeta para almacenar imágenes estáticas.

## Carpeta

src

Contiene el código fuente de la aplicación.

### Archivos principales

- **src/main.jsx**: Punto de entrada principal de la aplicación React.

- **src/App.jsx**: Componente principal que define las rutas y estructura de la aplicación.

- **src/App.css**: Estilos globales específicos de la aplicación.

- **src/index.css**: Estilos básicos y de reseteo.

### Subcarpetas

####

assets

Carpeta reservada para recursos adicionales (vacía en este momento).

####

components

Contiene los componentes de la aplicación:

- **Afiches.jsx**: Componente vacío.

- **Banner.jsx**: Componente para mostrar un banner decorativo.

- **carrito.jsx**: Componente para gestionar y mostrar el carrito de compras.

- **ContactForm.jsx**: Formulario de contacto con validación y selección de productos.

- **Footer.jsx**: Pie de página de la aplicación.

- **Header.jsx**: Encabezado con navegación principal.

- **Inicio.jsx**: Página de inicio con un carrusel de imágenes.

- **Pago.jsx**: Componente para seleccionar métodos de pago.

- **PreguntasFrecuentes.jsx**: Componente para mostrar preguntas frecuentes desde una API.

- **productos.jsx**: Catálogo de productos con datos obtenidos desde una API.

- **ProductosAPI.jsx**: Componente alternativo para mostrar productos desde una API.

- **SobreNosotros.jsx**: Página "Sobre Nosotros" con información obtenida desde una API.

- **SobreNosotrosAPI.jsx**: Variante del componente "Sobre Nosotros" para mostrar datos desde una API.

####

src

- **CarritoContext.jsx**: Contexto global para gestionar el estado del carrito de compras.

- **setupProxy.js**: Configuración de un proxy para redirigir solicitudes API.

---

Esta estructura organiza el proyecto en componentes reutilizables y facilita la gestión del estado global y las rutas.