# English Lab Web - Sitio Web Promocional y Pedagógico 📚🎧

[![Astro](https://img.shields.io/badge/Astro-v7.1.3-orange.svg?style=flat-square&logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v6.0.3-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v22.12.0-green.svg?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)]()

Sitio web estático de alto rendimiento diseñado para la promoción y acompañamiento pedagógico de la serie de libros de inglés preescolar **"English Lab"** (Niveles A, B y C), desarrollada para la editorial **Emprender Ediciones** (Bogotá, Colombia).

El proyecto integra tecnologías web modernas para ofrecer una experiencia interactiva a padres de familia, docentes y directivos institucionales, incluyendo visores de libros en 3D (FlipBook), reproductores de audio multitrack y un sistema de fonética interactiva.

---

## 🚀 Características Principales

- 📖 **Visor FlipBook 3D**: Previsualización interactiva de páginas de ejemplo con animaciones 3D y soporte táctil (*swipe*) para dispositivos móviles.
- 🎵 **Catálogo Musical (45 Canciones)**: Reproductor de audio exclusivo con control de concurrencia (reproducir un track detiene automáticamente el anterior).
- 🔤 **Módulo de Fonética Interactiva (36 Audios + 39 Imágenes)**: Tarjetas interactivas de vocabulario y pronunciación A-Z para los niveles B y C.
- 🌐 **Internacionalización (i18n Client-Side)**: Soporte bilingüe (Español / Inglés) en tiempo real con más de 80 claves de traducción sin recarga de página.
- 💬 **Integración con WhatsApp API**: Canal de contacto comercial pre-configurado para atención a clientes e instituciones educativas.
- 🇨🇴 **Alineación Pedagógica**: Basado en los 6 campos formativos del Programa de Educación Preescolar Colombiano.
- ⚡ **Rendimiento Ultrarrápido (SSG)**: Compilado con Astro v7 para generar HTML/CSS estático con 0KB de JavaScript innecesario en el cliente.

---

## 🛠️ Stack Tecnológico

| Tecnología / Herramienta | Versión | Descripción / Uso |
| :--- | :---: | :--- |
| **Astro** | `v7.1.3` | Framework SSG principal para generación de sitio estático de alto rendimiento. |
| **TypeScript** | `v6.0.3` | Lenguaje base para tipado estático y robustez en la lógica. |
| **Node.js** | `v22.12.0` | Entorno de ejecución y compilación del proyecto. |
| **CSS Custom Properties** | Nativo | Variables CSS dinámicas y scoped por componente. |
| **WhatsApp API** | `v1.0` | Generación de enlaces pre-cargados para contacto comercial directo. |
| **Google Fonts** | Service | Tipografías *Nunito* (títulos/botones) e *Inter* (cuerpo de texto). |

---

## 📂 Estructura del Proyecto

```text
english-lab-web/
├── public/
│   ├── audio/          # 45 canciones MP3 y 36 audios de fonética
│   └── images/         # Logos, covers, 21 págs. de FlipBook y 39 imágenes fonéticas
├── src/
│   ├── components/     # 7 componentes Astro nativos (Header, Hero, FlipBook, AudioPlayer, etc.)
│   ├── i18n/           # Diccionarios de traducción (ES/EN) y helper dinámico
│   ├── layouts/        # Layout base HTML (Layout.astro)
│   ├── pages/          # 11 rutas estáticas (/books, /songs, /phonetics, /contact, etc.)
│   └── styles/         # Estilos globales y variables CSS custom
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🗺️ Páginas y Rutas

| Ruta | Página | Descripción |
| :--- | :--- | :--- |
| `/` | **Inicio** | Hero principal, presentación de niveles, campos formativos y CTAs. |
| `/books` | **Libros** | Catálogo general de los 3 niveles (A, B y C). |
| `/books/a` | **Libro A** | Visor FlipBook (8 pág.) + 24 canciones integradas. |
| `/books/b` | **Libro B** | Visor FlipBook (6 pág.) + 9 canciones integradas. |
| `/books/c` | **Libro C** | Visor FlipBook (7 pág.) + 12 canciones integradas. |
| `/songs` | **Canciones** | Reproductores para las 45 canciones con filtro interactivo por nivel. |
| `/phonetics` | **Fonética** | Navegación hacia módulos fonéticos por nivel. |
| `/phonetics/b` | **Fonética B** | 10 tarjetas con pronunciación e imagen asociada. |
| `/phonetics/c` | **Fonética C** | 26 tarjetas (A-Z) con pronunciación e imagen asociada. |
| `/about` | **Nosotros** | Misión, visión y propuesta pedagógica de Emprender Ediciones. |
| `/contact` | **Contacto** | Formulario con enlace pre-configurado a la API de WhatsApp. |

---

## ⚡ Instalación y Configuración Local

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión `>=22.12.0`) y `git` en tu sistema.

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/english-lab-web.git
   cd english-lab-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la aplicación en funcionamiento.

4. **Construir para producción (Build):**
   ```bash
   npm run build
   ```
   Los archivos compilados listos para despliegue se generarán en la carpeta `dist/`.

5. **Previsualizar la versión de producción:**
   ```bash
   npm run preview
   ```

---

## 📊 Métricas de Calidad y Rendimiento

El sitio fue evaluado con **Google Lighthouse** bajo estándares exigentes para garantizar la mejor experiencia de usuario:

- **Performance**: $\ge 90 / 100$
- **Accesibilidad (A11y)**: $\ge 90 / 100$
- **Best Practices**: $\ge 90 / 100$
- **SEO**: $\ge 90 / 100$
- **First Contentful Paint (FCP)**: $< 1.5	ext{s}$ (Redes 3G/4G)
- **Cambio de Idioma (i18n)**: $< 100	ext{ms}$ (instantáneo, client-side)

---

## 👤 Créditos y Desarrollo

- **Desarrollador Principal**: Samuel David Molina Gómez
- **Cliente / Editorial**: Emprender Ediciones (Bogotá, Colombia)
