# The Devil's Due - Horror Game Website

Este documento técnico detalla las tecnologías multimedia e interactivas implementadas en el sitio web del videojuego de terror "The Devil's Due".

## Tecnologías Utilizadas

### HTML5

Se ha utilizado HTML5 como base del desarrollo, aprovechando sus capacidades multimedia nativas:

- **Etiqueta `<video>`**: Implementada en la sección de tráiler para reproducir contenido de video con múltiples formatos (MP4 y WebM) para garantizar la compatibilidad entre navegadores.
- **Etiqueta `<picture>`**: Utilizada para implementar imágenes responsivas con diferentes resoluciones según el tamaño de pantalla, optimizando el rendimiento y la experiencia de usuario.
- **Atributos `srcset` y `sizes`**: Permiten servir imágenes de diferentes resoluciones según el dispositivo y el ancho de la ventana, mejorando los tiempos de carga y el consumo de datos.
- **Elementos semánticos**: Se utilizan etiquetas como `<section>`, `<header>`, `<footer>` para mejorar la accesibilidad y el SEO.

### CSS3

Se han implementado características avanzadas de CSS3 para crear efectos visuales y mejorar la experiencia de usuario:

- **Animaciones y transiciones**: Efectos de fade-in, transformaciones y animaciones para elementos interactivos.
- **Flexbox y Grid**: Sistemas de layout modernos para crear diseños responsivos y adaptables a diferentes dispositivos.
- **Variables CSS personalizadas**: Implementadas a través de Tailwind para mantener consistencia en colores y estilos.
- **Media queries**: Para adaptar el diseño a diferentes tamaños de pantalla.
- **Efectos visuales**: Sombras, gradientes, opacidad y efectos de hover para mejorar la estética y la interactividad.

### JavaScript

Se ha utilizado JavaScript para añadir interactividad y efectos dinámicos:

- **Intersection Observer API**: Implementada para detectar cuando los elementos entran en el viewport y activar animaciones.
- **Manipulación del DOM**: Para controlar el menú móvil y otros elementos interactivos.
- **Efectos de parallax**: Creación de efectos de profundidad en el desplazamiento.
- **Galería interactiva**: Funcionalidad para interactuar con las imágenes de la galería.

### Frameworks y Librerías

- **Tailwind CSS**: Framework de utilidades CSS para un desarrollo rápido y consistente.
- **Vite**: Herramienta de construcción moderna para un desarrollo más rápido y una mejor experiencia de desarrollo.
- **PostCSS**: Para procesamiento avanzado de CSS con plugins como Autoprefixer.

## Optimización Multimedia

### Imágenes Responsivas

Se ha implementado un sistema completo de imágenes responsivas:

- **Múltiples resoluciones**: Cada imagen cuenta con versiones optimizadas para diferentes tamaños (300w, 500w, 800w, 1200w, etc.).
- **Formato adecuado**: Utilización de formatos modernos y optimizados.
- **Lazy loading nativo**: Carga diferida de imágenes para mejorar el rendimiento inicial.

### Video Optimizado

- **Múltiples formatos**: Soporte para WebM (más eficiente) y MP4 (mayor compatibilidad).
- **Poster**: Imagen de previsualización para mejorar la experiencia antes de la reproducción.
- **Controles nativos**: Utilización de controles HTML5 estándar para mayor compatibilidad.

## Interactividad

### Elementos Interactivos

- **Menú de navegación responsivo**: Adaptable a dispositivos móviles con animaciones suaves.
- **Efectos hover**: En elementos de navegación, tarjetas y botones.
- **Animaciones al scroll**: Elementos que se animan cuando entran en el viewport.
- **Galería interactiva**: Con efectos de hover y zoom.

### Efectos Especiales

- **Efecto parallax**: Para crear sensación de profundidad al hacer scroll.
- **Transiciones suaves**: Entre estados de los elementos interactivos.

## Compatibilidad con Navegadores

El sitio ha sido desarrollado y probado para garantizar la compatibilidad con los principales navegadores:

- **Chrome/Edge** (Motor Blink): Funcionalidad completa.
- **Firefox** (Motor Gecko): Funcionalidad completa.
- **Safari** (Motor WebKit): Funcionalidad completa con pequeñas diferencias en renderizado.

### Configuraciones Específicas

- **Autoprefixer**: Utilizado para añadir prefijos de navegadores a las propiedades CSS.
- **Fallbacks**: Implementación de alternativas para características no soportadas en algunos navegadores.

## Pruebas en Dispositivos

Se han realizado pruebas exhaustivas en diferentes dispositivos y tamaños de pantalla:

- **Dispositivos móviles**: Android e iOS en diferentes tamaños de pantalla.
- **Tablets**: Tablets Android.
- **Ordenadores de escritorio**: Diferentes resoluciones y relaciones de aspecto.
