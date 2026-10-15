# Prime Commercial Link / United Trade Solutions — sitio estático bilingüe

Portal informativo estático (HTML/CSS/JS puro, sin build ni frameworks) para
**United Trade Solutions LLC** y **Prime Commercial Link LLC**. Inglés por
defecto, con selector EN/ES persistente (localStorage).

## Estructura

```
index.html          ← landing completa (hero, empresas, categorías, flujo,
                       pagos, protocolo de verificación, cumplimiento, FAQ, contacto)
terms.html           ← Términos y Condiciones, bilingüe
privacy.html          ← Política de Privacidad, bilingüe
css/styles.css        ← un solo archivo de estilos, tema oscuro/teal
js/script.js           ← menú móvil, selector de idioma, acordeón de FAQ
assets/favicon.svg
robots.txt / sitemap.xml
```

## Cómo funciona el bilingüe

Cada bloque de texto está duplicado con `data-lang="en"` / `data-lang="es"`.
El atributo `data-lang` en `<html>` decide cuál se muestra (CSS puro, sin
recargar la página). El botón EN/ES en el header guarda la preferencia en
`localStorage` para que el idioma se mantenga en la siguiente visita.

Al editar contenido: cada texto nuevo necesita su par en el otro idioma con
el mismo `data-lang`, o desaparecerá en uno de los dos modos.

## Contenido pendiente antes de publicar

- Correo oficial de **Prime Commercial Link LLC** (hoy dice "próximamente/coming soon")
  en `index.html` (sección "Nuestras Empresas") y en `terms.html`.
- Confirmar que `unitedts94@gmail.com` es el correo de contacto definitivo, o
  reemplazarlo por un dominio corporativo propio.
- El `<link rel="canonical">` y `og:url` en `index.html` apuntan a
  `plbroker.disrupthings.com` — actualizar si el dominio final es otro.
- Revisión legal final de `terms.html` y `privacy.html` por un abogado
  licenciado en Nueva Jersey antes de operar con el público.

## Probar en local

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Despliegue

Mismo flujo que el resto de los sitios estáticos del stack: contenedor
`nginx:alpine` detrás de Nginx/Cloudflare, o GitHub Pages si se prefiere
hosting gratuito. No requiere build ni variables de entorno.
