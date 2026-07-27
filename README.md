# English Lab Web - Sitio Web Promocional y PedagÃ³gico ðŸ“šðŸŽ§

[![Astro](https://img.shields.io/badge/Astro-v7.1.3-orange.svg?style=flat-square&logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v6.0.3-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v22.12.0-green.svg?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)]()

Sitio web estÃ¡tico de alto rendimiento diseÃ±ado para la promociÃ³n y acompaÃ±amiento pedagÃ³gico de la serie de libros de inglÃ©s preescolar **"English Lab"** (Niveles A, B y C), desarrollada para la editorial **Emprender Ediciones** (BogotÃ¡, Colombia).

El proyecto integra tecnologÃ­as web modernas para ofrecer una experiencia interactiva a padres de familia, docentes y directivos institucionales, incluyendo visores de libros en 3D (FlipBook), reproductores de audio multitrack y un sistema de fonÃ©tica interactiva.

---

## ðŸš€ CaracterÃ­sticas Principales

- ðŸ“– **Visor FlipBook 3D**: PrevisualizaciÃ³n interactiva de pÃ¡ginas de ejemplo con animaciones 3D y soporte tÃ¡ctil (*swipe*) para dispositivos mÃ³viles.
- ðŸŽµ **CatÃ¡logo Musical (45 Canciones)**: Reproductor de audio exclusivo con control de concurrencia (reproducir un track detiene automÃ¡ticamente el anterior).
- ðŸ”¤ **MÃ³dulo de FonÃ©tica Interactiva (36 Audios + 39 ImÃ¡genes)**: Tarjetas interactivas de vocabulario y pronunciaciÃ³n A-Z para los niveles B y C.
- ðŸŒ **InternacionalizaciÃ³n (i18n Client-Side)**: Soporte bilingÃ¼e (EspaÃ±ol / InglÃ©s) en tiempo real con mÃ¡s de 80 claves de traducciÃ³n sin recarga de pÃ¡gina.
- ðŸ’¬ **IntegraciÃ³n con WhatsApp API**: Canal de contacto comercial pre-configurado para atenciÃ³n a clientes e instituciones educativas.
- ðŸ‡¨ðŸ‡´ **AlineaciÃ³n PedagÃ³gica**: Basado en los 6 campos formativos del Programa de EducaciÃ³n Preescolar Colombiano.
- âš¡ **Rendimiento UltrarrÃ¡pido (SSG)**: Compilado con Astro v7 para generar HTML/CSS estÃ¡tico con 0KB de JavaScript innecesario en el cliente.

---

## ðŸ› ï¸ Stack TecnolÃ³gico

| TecnologÃ­a / Herramienta | VersiÃ³n | DescripciÃ³n / Uso |
| :--- | :---: | :--- |
| **Astro** | `v7.1.3` | Framework SSG principal para generaciÃ³n de sitio estÃ¡tico de alto rendimiento. |
| **TypeScript** | `v6.0.3` | Lenguaje base para tipado estÃ¡tico y robustez en la lÃ³gica. |
| **Node.js** | `v22.12.0` | Entorno de ejecuciÃ³n y compilaciÃ³n del proyecto. |
| **CSS Custom Properties** | Nativo | Variables CSS dinÃ¡micas y scoped por componente. |
| **WhatsApp API** | `v1.0` | GeneraciÃ³n de enlaces pre-cargados para contacto comercial directo. |
| **Google Fonts** | Service | TipografÃ­as *Nunito* (tÃ­tulos/botones) e *Inter* (cuerpo de texto). |

---

## ðŸ“‚ Estructura del Proyecto

```text
english-lab-web/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ audio/          # 45 canciones MP3 y 36 audios de fonÃ©tica
â”‚   â””â”€â”€ images/         # Logos, covers, 21 pÃ¡gs. de FlipBook y 39 imÃ¡genes fonÃ©ticas
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/     # 7 componentes Astro nativos (Header, Hero, FlipBook, AudioPlayer, etc.)
â”‚   â”œâ”€â”€ i18n/           # Diccionarios de traducciÃ³n (ES/EN) y helper dinÃ¡mico
â”‚   â”œâ”€â”€ layouts/        # Layout base HTML (Layout.astro)
â”‚   â”œâ”€â”€ pages/          # 11 rutas estÃ¡ticas (/books, /songs, /phonetics, /contact, etc.)
â”‚   â””â”€â”€ styles/         # Estilos globales y variables CSS custom
â”œâ”€â”€ astro.config.mjs
â”œâ”€â”€ package.json
â””â”€â”€ tsconfig.json
```

---

## ðŸ—ºï¸ PÃ¡ginas y Rutas

| Ruta | PÃ¡gina | DescripciÃ³n |
| :--- | :--- | :--- |
| `/` | **Inicio** | Hero principal, presentaciÃ³n de niveles, campos formativos y CTAs. |
| `/books` | **Libros** | CatÃ¡logo general de los 3 niveles (A, B y C). |
| `/books/a` | **Libro A** | Visor FlipBook (8 pÃ¡g.) + 24 canciones integradas. |
| `/books/b` | **Libro B** | Visor FlipBook (6 pÃ¡g.) + 9 canciones integradas. |
| `/books/c` | **Libro C** | Visor FlipBook (7 pÃ¡g.) + 12 canciones integradas. |
| `/songs` | **Canciones** | Reproductores para las 45 canciones con filtro interactivo por nivel. |
| `/phonetics` | **FonÃ©tica** | NavegaciÃ³n hacia mÃ³dulos fonÃ©ticos por nivel. |
| `/phonetics/b` | **FonÃ©tica B** | 10 tarjetas con pronunciaciÃ³n e imagen asociada. |
| `/phonetics/c` | **FonÃ©tica C** | 26 tarjetas (A-Z) con pronunciaciÃ³n e imagen asociada. |
| `/about` | **Nosotros** | MisiÃ³n, visiÃ³n y propuesta pedagÃ³gica de Emprender Ediciones. |
| `/contact` | **Contacto** | Formulario con enlace pre-configurado a la API de WhatsApp. |

---

## âš¡ InstalaciÃ³n y ConfiguraciÃ³n Local

### Prerrequisitos
AsegÃºrate de tener instalado [Node.js](https://nodejs.org/) (versiÃ³n `>=22.12.0`) y `git` en tu sistema.

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
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la aplicaciÃ³n en funcionamiento.

4. **Construir para producciÃ³n (Build):**
   ```bash
   npm run build
   ```
   Los archivos compilados listos para despliegue se generarÃ¡n en la carpeta `dist/`.

5. **Previsualizar la versiÃ³n de producciÃ³n:**
   ```bash
   npm run preview
   ```

---

## ðŸ“Š MÃ©tricas de Calidad y Rendimiento

El sitio fue evaluado con **Google Lighthouse** bajo estÃ¡ndares exigentes para garantizar la mejor experiencia de usuario:

- **Performance**: $\ge 90 / 100$
- **Accesibilidad (A11y)**: $\ge 90 / 100$
- **Best Practices**: $\ge 90 / 100$
- **SEO**: $\ge 90 / 100$
- **First Contentful Paint (FCP)**: $< 1.5	ext{s}$ (Redes 3G/4G)
- **Cambio de Idioma (i18n)**: $< 100	ext{ms}$ (instantÃ¡neo, client-side)

---

## ðŸ‘¤ CrÃ©ditos y Desarrollo

- **Desarrollador Principal**: Samuel David Molina GÃ³mez
- **Cliente / Editorial**: Emprender Ediciones (BogotÃ¡, Colombia)
- **Jefe Inmediato**: Mario Ricardo (Tel: +57 324 677 2124)
- **Contacto Comercial**: +57 321 464 9099