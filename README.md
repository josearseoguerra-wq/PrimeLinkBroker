# UTS - PCL — sitio estático bilingüe

Portal informativo estático (HTML/CSS/JS puro, sin build ni dependencias externas) para
**United Trade Solutions LLC** y **Prime Commercial Link LLC**. Inglés por defecto, con
selector EN/ES persistente (localStorage).

## Estructura

```
public/                ← ÚNICA carpeta que se publica
  index.html           ← landing (hero, empresas, categorías, flujo, pagos, protocolo, FAQ, contacto)
  terms.html           ← Términos y Condiciones
  privacy.html         ← Política de Privacidad
  404.html             ← página de error
  css/styles.css
  js/script.js
  assets/favicon.svg
  robots.txt
  _headers             ← cabeceras de seguridad (Cloudflare Pages)
  .well-known/security.txt
README.md              ← NO se publica
```

## Despliegue (Cloudflare Pages)

- Framework preset: **None** · Build command: *(vacío)* · Build output directory: **`public`**
- El archivo `public/_headers` aplica CSP, HSTS, X-Frame-Options, etc.

## Seguridad aplicada en el código

- CSP estricta (solo recursos propios, sin inline scripts/styles, sin formularios, sin iframes).
- Sin dependencias ni recursos de terceros (no CDNs, no fuentes externas, no analítica).
- Sin `innerHTML`/`eval`; Trusted Types exigido.
- Aviso antifraude: nunca se cambian datos bancarios por correo.

## Pendiente al tener dominio propio

1. En `public/index.html` agregar `<link rel="canonical">` y `og:url` con el dominio.
2. Crear `public/sitemap.xml` y añadir `Sitemap:` en `public/robots.txt`.
3. Añadir `Canonical:` en `public/.well-known/security.txt` (renovar `Expires` cada año).
4. Correos con dominio propio + SPF/DKIM/DMARC `p=reject`; actualizar los correos del sitio.

## Probar en local

```bash
cd public && python3 -m http.server 8080
```

Al editar contenido: cada texto necesita su par `data-lang="en"` / `data-lang="es"`.
Al cambiar CSS/JS, subir el `?v=` en los `<link>`/`<script>` de los HTML.
