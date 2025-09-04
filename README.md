# Specialty Module - "What is the Specialty of Us?"

## Descripción

Este módulo implementa la sección "What is the Specialty of Us?" como un carrusel responsive de tarjetas que muestra las últimas noticias de negocios obtenidas dinámicamente desde la API NewsAPI. utilizando React y CSS puro.

## Características Principales

-  **Carrusel interactivo**: Navegación suave con controles de flechas
-  **100% Responsive**: Adaptación completa a mobile, tablet y desktop
-  **Contenido Dinámico**: Integración en tiempo real con NewsAPI
-  **Estados de Carga**: Indicadores visuales para carga y errores

## Tecnologías Utilizadas

- **React 18** - Biblioteca de componentes
- **Next.js 13** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **CSS3 Puro** - Estilos con CSS puro
- **NewsAPI** - API para contenido dinámico de noticias

## Instalación y Ejecución

### Prerequisitos
- git
- Node.js 16.8 o superior
- npm o yarn


### Pasos para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd carrusel-test-react
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


## API Integration

El módulo utiliza NewsAPI para obtener las últimas noticias de negocios:
- **Endpoint**: `https://newsapi.org/v2/top-headlines`
- **Categoría**: Business (us)

## Customización

### Modificar estilos
Los estilos están organizados en `components/SpecialtySection.css` con secciones claramente definidas:
- Estilos base del componente
- Estilos del carrusel
- Media queries para responsividad
- Estados de accesibilidad

### Cambiar fuente de datos
Para utilizar una fuente de datos diferente, modifica la función `fetchNews` en `SpecialtySection.tsx`.

