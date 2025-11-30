# PAN Tampico - Sitio Web Oficial

Sitio web oficial del Comité Municipal del Partido Acción Nacional en Tampico, Tamaulipas.

## 📋 Características

- ✅ Diseño responsivo (móvil, tablet, escritorio)
- ✅ Identidad visual basada en el manual de marca del PAN
- ✅ Galería fotográfica con filtros
- ✅ Integración con redes sociales
- ✅ Formulario de contacto
- ✅ Optimizado para GitHub Pages

## 🎨 Colores de Marca

- **Primary:** #253775 (Pantone 2756C)
- **Secondary:** #0043A1 (Pantone 293C)
- **Accent:** #00B8F0 (Pantone 306C)

## 📁 Estructura del Proyecto
```
pan-tampico/
├── index.html              # Página principal
├── historia.html           # Historia del PAN
├── principios.html         # Principios e ideología
├── organizacion.html       # Estructura organizacional
├── galeria.html           # Galería fotográfica
├── contacto.html          # Página de contacto
├── css/                   # Hojas de estilo
├── js/                    # JavaScript
└── images/                # Imágenes y logos
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio

1. Ve a GitHub y crea un nuevo repositorio
2. Nombra el repositorio: `pan-tampico` (o el nombre que prefieras)
3. Marca como público

### Paso 2: Subir Archivos
```bash
# En tu terminal, navega a la carpeta del proyecto
cd pan-tampico

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - PAN Tampico website"

# Conecta con tu repositorio de GitHub
git remote add origin https://github.com/TU-USUARIO/pan-tampico.git

# Sube los archivos
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **main branch**
5. Click en **Save**
6. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/pan-tampico/`

## 📝 Personalización

### Actualizar Información de Contacto

Edita las siguientes secciones en todos los archivos HTML:
```html
<!-- Footer - Contacto -->
<li>📍 [Tu dirección real]</li>
<li>📞 [Tu teléfono real]</li>
<li>✉️ [Tu email real]</li>
```

### Agregar Logos

1. Exporta el logo del PAN desde el manual de identidad
2. Guárdalo como SVG en la carpeta `images/`
3. Crea dos versiones:
   - `logo-pan.svg` (versión normal)
   - `logo-pan-white.svg` (versión blanca)

### Agregar Fotos Reales

Reemplaza los archivos placeholder con fotos reales:

- **Noticias:** `images/placeholder-news-*.jpg`
- **Galería:** `images/gallery/placeholder-*.jpg`
- **Líderes:** `images/leaders/placeholder-*.jpg`

Dimensiones recomendadas:
- Noticias: 800x600px
- Galería: 1200x900px
- Líderes: 400x500px

### Actualizar Redes Sociales

En el archivo `js/main.js`, actualiza las URLs:
```javascript
const socialLinks = {
    facebook: 'https://facebook.com/pantampico',
    twitter: 'https://twitter.com/pantampico',
    instagram: 'https://instagram.com/pantampico',
    youtube: 'https://youtube.com/pantampico'
};
```

### Actualizar Mapa

En `contacto.html`, reemplaza el iframe del mapa con tu ubicación real:

1. Ve a Google Maps
2. Busca tu dirección
3. Click en "Compartir"
4. Click en "Insertar un mapa"
5. Copia el código y reemplázalo en el HTML

## 🛠️ Mantenimiento

### Agregar Noticias

Edita `index.html` y agrega nuevas tarjetas de noticias:
```html
<article class="news-card">
    <img src="images/tu-imagen.jpg" alt="Descripción">
    <div class="news-content">
        <span class="news-date">Fecha</span>
        <h3>Título de la Noticia</h3>
        <p>Descripción breve...</p>
        <a href="#" class="news-link">Leer más →</a>
    </div>
</article>
```

### Agregar Fotos a la Galería

Edita `galeria.html`:
```html
<div class="gallery-item" data-category="eventos">
    <img src="images/gallery/nueva-foto.jpg" alt="Descripción">
    <div class="gallery-overlay">
        <h3>Título del Evento</h3>
        <p>Fecha</p>
    </div>
</div>
```

## 📱 Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles (iOS y Android)

## 📞 Soporte

Para preguntas o soporte técnico, contacta al equipo de comunicación del PAN Tampico.

## 📄 Licencia

Este sitio web utiliza la identidad visual del Partido Acción Nacional de acuerdo con el Manual de Identidad oficial.

---

**PAN Tampico** - ¡Unidos Todos en Acción!