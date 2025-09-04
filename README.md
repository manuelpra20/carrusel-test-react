# Specialty Module - "What is the Specialty of Us?"

## Descripción

Este módulo implementa la sección "What is the Specialty of Us?" como un carrusel responsive de tarjetas que muestra las últimas noticias de negocios obtenidas dinámicamente desde NewsAPI. El diseño sigue fielmente las especificaciones visuales proporcionadas, utilizando únicamente CSS puro sin frameworks externos.

## Características Principales

- 🎠 **Carrusel interactivo**: Navegación suave con controles de flechas
- 📱 **100% Responsive**: Adaptación completa a mobile, tablet y desktop
- 🎨 **CSS Puro**: Sin dependencias de frameworks CSS externos
- 📰 **Contenido Dinámico**: Integración en tiempo real con NewsAPI
- ♿ **Accesibilidad**: Soporte para lectores de pantalla y navegación por teclado
- 🔄 **Estados de Carga**: Indicadores visuales para carga y errores

## Tecnologías Utilizadas

- **React 18** - Biblioteca de componentes
- **Next.js 13** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **CSS3 Puro** - Estilos sin frameworks externos
- **NewsAPI** - API para contenido dinámico de noticias

## Instalación y Ejecución

### Prerequisitos
- Node.js 16.8 o superior
- npm o yarn

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd specialty-module
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter para revisar el código

## Estructura del Proyecto

```
/
├── app/
│   ├── globals.css          # Estilos globales y reset
│   ├── layout.tsx           # Layout principal de Next.js
│   └── page.tsx             # Página principal
├── components/
│   ├── SpecialtySection.tsx # Componente principal del módulo
│   └── SpecialtySection.css # Estilos específicos del módulo
└── README.md                # Este archivo
```

## Responsive Breakpoints

El módulo está optimizado para los siguientes breakpoints:

- **Mobile Small**: 320px - 479px
- **Mobile Large**: 480px - 767px  
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1199px
- **Large Desktop**: 1200px+

## Características de Accesibilidad

- Navegación por teclado completa
- Estados de focus visibles
- Soporte para lectores de pantalla
- Respeto por preferencias de movimiento reducido
- Soporte para modo de alto contraste

## API Integration

El módulo utiliza NewsAPI para obtener las últimas noticias de negocios:
- **Endpoint**: `https://newsapi.org/v2/top-headlines`
- **Categoría**: Business (us)
- **Límite**: 6 artículos para el carrusel

## Customización

### Modificar estilos
Los estilos están organizados en `components/SpecialtySection.css` con secciones claramente definidas:
- Estilos base del componente
- Estilos del carrusel
- Media queries para responsividad
- Estados de accesibilidad

### Cambiar fuente de datos
Para utilizar una fuente de datos diferente, modifica la función `fetchNews` en `SpecialtySection.tsx`.

## Consideraciones de Producción

- La API key está expuesta en el cliente por simplicidad del ejercicio
- En producción, se recomienda usar una API route o Edge function para proteger las credenciales
- El módulo maneja gracefulmente errores de red y carga
- Implementa lazy loading para optimizar el rendimiento

## Soporte de Navegadores

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Opera 74+

El módulo utiliza características CSS modernas con fallbacks apropiados para mantener compatibilidad.