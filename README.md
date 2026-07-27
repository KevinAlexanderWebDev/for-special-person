# 🌌 Pecado Olvidar — Sistema Solar Interactivo

[![Deploy to GitHub Pages](https://github.com/KevinAlexanderWebDev/for-special-person/actions/workflows/deploy.yml/badge.svg)](https://github.com/KevinAlexanderWebDev/for-special-person/actions/workflows/deploy.yml)

> **"Cada órbita, cada constelación y estela, cada planeta y estrella muestran lo inmenso del cosmos tal como lo es mi amor infinito por ti."**

Una experiencia web inmersiva en 3D que convierte un sistema solar navegable en un álbum de recuerdos. Haz clic en los planetas para revelar momentos especiales con popups de memoria animados.

**🌐 Sitio en vivo:** https://KevinAlexanderWebDev.github.io/for-special-person/

---

## 🇪🇸 Español

### ✨ Características

- **Sistema solar 3D interactivo** — 12 planetas orbitando con texturas procedurales únicas
- **Recuerdos por planeta** — Cada cuerpo celeste guarda una memoria especial con imagen, título, fecha y mensaje
- **Cinturón de asteroides** — Animación orbital generada proceduralmente
- **Fondo galáctico** — Estrellas, nubes de nebulosa y ambientación espacial
- **Música de fondo** — Audio en streaming con reproducción automática tras interacción
- **Pantalla de carga** — Barra de progreso animada con fade-out
- **Responsive** — Optimizado para móvil y desktop
- **Touch-friendly** — Popups que se cierran al tocar fuera

### 🛠️ Stack técnico

| Tecnología | Versión |
|------------|---------|
| React | 19 |
| Three.js + @react-three/fiber | 0.185 / 9.x |
| @react-three/drei | 10.x |
| Vite | 8 |
| Howler.js | — |
| TailwindCSS | 4 |
| GitHub Pages | Deploy automático |

### 🚀 Despliegue propio

```bash
# 1. Clonar el repo
git clone https://github.com/KevinAlexanderWebDev/for-special-person.git
cd for-special-person

# 2. Instalar dependencias
npm install

# 3. Desarrollo local
npm run dev

# 4. Build producción
npm run build

# 5. Preview local del build
npm run preview
```

#### GitHub Actions (CI/CD)

El proyecto incluye un workflow que despliega automáticamente a GitHub Pages al pushear a `master` o `main`:

1. Ve a **Settings → Pages** de tu fork
2. Source: **Deploy from a branch**, Branch: `gh-pages`, Folder: `/ (root)`
3. Cambia `base` en `vite.config.js` al nombre de tu repo
4. Cambia `homepage` en `package.json` a la URL de tu GitHub Pages

---

## 🇬🇧 English

### ✨ Features

- **Interactive 3D solar system** — 12 orbiting planets with unique procedural textures
- **Planetary memories** — Each celestial body holds a special memory with image, title, date, and message
- **Asteroid belt** — Procedurally generated orbital animation
- **Galactic background** — Stars, nebula clouds, and space ambiance
- **Background music** — Streaming audio with playback on user interaction
- **Loading screen** — Animated progress bar with fade-out transition
- **Responsive** — Optimized for mobile and desktop
- **Touch-friendly** — Popups close on outside tap

### 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| React | 19 |
| Three.js + @react-three/fiber | 0.185 / 9.x |
| @react-three/drei | 10.x |
| Vite | 8 |
| Howler.js | — |
| TailwindCSS | 4 |
| GitHub Pages | Auto-deploy |

### 🚀 Self-host

```bash
# 1. Clone the repo
git clone https://github.com/KevinAlexanderWebDev/for-special-person.git
cd for-special-person

# 2. Install dependencies
npm install

# 3. Local development
npm run dev

# 4. Production build
npm run build

# 5. Local preview of build
npm run preview
```

#### GitHub Actions (CI/CD)

The project includes a workflow that auto-deploys to GitHub Pages on push to `master` or `main`:

1. Go to **Settings → Pages** of your fork
2. Source: **Deploy from a branch**, Branch: `gh-pages`, Folder: `/ (root)`
3. Change `base` in `vite.config.js` to match your repo name
4. Change `homepage` in `package.json` to your GitHub Pages URL

---

## 👤 Autor / Author

**Kevin Alexander Meza**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kevin-meza-ecommerce-dev/)
[![GitHub CV](https://img.shields.io/badge/GitHub-CV-181717?style=for-the-badge&logo=github&logoColor=white)](https://kevinalexanderwebdev.github.io/Cv-Kevin-Alexander/)

---

## 📄 Licencia / License

MIT
