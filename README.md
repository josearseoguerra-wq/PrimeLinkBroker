# UTS - PCL — sitio estático bilingüe

Portal informativo estático (HTML/CSS/JS puro, sin build ni dependencias externas) para
**United Trade Solutions LLC** y **Prime Commercial Link LLC**. Inglés por defecto, con
selector EN/ES persistente (localStorage).

## Estructura

```
public/                ← ÚNICA carpeta que se publica
  index.html           ← landing (hero, empresas, categorías, flujo, pagos, protocolo, FAQ, contacto)
  terms.html / privacy.html / 404.html
  css/styles.css · js/script.js · assets/favicon.svg
  robots.txt · sitemap.xml
  .well-known/security.txt
README.md              ← NO se publica
```

## Producción

- Dominio: **https://utspcl.com** (registrador GoDaddy, DNS en Cloudflare: dean / selah.ns.cloudflare.com).
- Hosting: **GitHub Pages** con el workflow `.github/workflows/pages.yml`, que publica solo
  `public/` (incluye `.well-known/`). Settings → Pages: Source = GitHub Actions,
  Custom domain = `utspcl.com`, Enforce HTTPS activo. Dominio verificado en la cuenta.
- Cloudflare delante (proxy naranja): SSL **Full (strict)**, Always Use HTTPS, TLS ≥ 1.2,
  redirección 301 `www` → raíz, DNSSEC activo (DS en GoDaddy).
- Cabeceras de seguridad (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy,
  COOP) en **Cloudflare → Reglas de transformación**. La CSP también va en `<meta>`.
- **No activar** en Cloudflare: ofuscación de correos, Bot Fight Mode, Rocket Loader,
  AI Labyrinth (inyectan scripts que la CSP bloquea).
- Correo del dominio bloqueado contra falsificación (SPF `-all`, DKIM vacío, DMARC `reject`)
  hasta que se contrate correo propio.

## Seguridad aplicada en el código

- CSP estricta (solo recursos propios, sin inline scripts/styles, sin formularios, sin iframes).
- Sin dependencias ni recursos de terceros (no CDNs, no fuentes externas, no analítica).
- Sin `innerHTML`/`eval`; Trusted Types exigido.
- Acciones del workflow fijadas por SHA.
- Aviso antifraude: nunca se cambian datos bancarios por correo.

## Mantenimiento

- Renovar `Expires` de `public/.well-known/security.txt` antes de la fecha indicada.
- Al contratar correo con dominio propio: ajustar SPF/DKIM/DMARC en Cloudflare y
  actualizar los correos del sitio y del aviso antifraude.

## Probar en local

```bash
cd public && python3 -m http.server 8080
```

Al editar contenido: cada texto necesita su par `data-lang="en"` / `data-lang="es"`.
Al cambiar CSS/JS, subir el `?v=` en los `<link>`/`<script>` de los HTML.
