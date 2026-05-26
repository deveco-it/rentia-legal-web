# rentia-legal-web

Sitio estático que aloja los documentos legales y la página de soporte oficial de la aplicación móvil **Rentia** (`com.devecoit.rentia` en iOS, `com.rentia` en Android). Las URLs publicadas aquí son las que se referencian desde la ficha de Google Play y App Store Connect.

## Rutas

| Ruta | Documento |
| --- | --- |
| `/` | Landing con accesos a los tres documentos |
| `/terms` | Términos y Condiciones |
| `/privacy` | Política de Privacidad (RGPD/LOPDGDD) |
| `/support` | Soporte y contacto |

Los textos están redactados en español y contienen marcadores `TODO:` resaltados visualmente que deben ser revisados y completados por el equipo legal **antes** de publicar la URL en las store listings.

## Stack

- Vite 7 + React 19 + TypeScript 5.9 (mismo stack que `rentia-backoffice-app-web`)
- Tailwind CSS v4 vía `@tailwindcss/vite` (tokens de marca definidos en `src/app/styles/index.css`)
- React Router v7 (`BrowserRouter`)
- `react-helmet-async` para `<title>` y `<meta description>` por ruta

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # genera dist/
npm run preview      # sirve el build de producción
npm run typecheck    # tsc -b --noEmit
npm run lint
npm run format
```

## Despliegue

El repo se entrega **sin workflow de despliegue** todavía: el host se decide cuando el contenido legal esté cerrado. El proyecto ya incluye `public/404.html` con el truco de redirect SPA, por lo que el primer despliegue en **GitHub Pages** funciona sin configuración adicional (la URL directa `/terms` resuelve correctamente).

### Opciones recomendadas

- **GitHub Pages**: añadir `.github/workflows/deploy.yml` que ejecute `npm ci && npm run build` y publique `dist/`. Si se sirve bajo `https://deveco-it.github.io/rentia-legal-web/`, ajustar `base: '/rentia-legal-web/'` en `vite.config.ts`.
- **Cloudflare Pages**: conectar el repo, comando de build `npm run build`, directorio `dist`. Añadir un fichero `public/_redirects` con `/*  /index.html  200` para que las rutas SPA funcionen sin el truco del `404.html`.
- **Vercel / Netlify**: conectar el repo y dejar la detección automática de Vite.

### Cómo enlazar desde las stores

Una vez desplegado y con dominio definitivo:

- **App Store Connect** → *App Information* → rellenar *Privacy Policy URL* con `https://<dominio>/privacy`.
- **Google Play Console** → *Policy → App content → Privacy policy* con la misma URL. Añadir *Support email* en la ficha de la app y, opcionalmente, el enlace a `/support`.
- En ambos casos, los Términos suelen enlazarse desde la propia descripción de la app o desde la pantalla de bienvenida dentro de la aplicación móvil.

## Añadir o modificar una página legal

1. Crear o editar el archivo en `src/pages/`.
2. Si es una nueva ruta, registrarla en `src/app/router.tsx`.
3. Para nuevas secciones dentro de un documento existente usa `<SectionHeading>` (genera anchors automáticamente) y, para texto pendiente de abogado, `<TodoBadge>` para que quede visualmente marcado.
4. Actualizar la cabecera `lastUpdated` del documento (`LegalDocument`).

## Convenciones

- Path alias `@` → `src/` (configurado en `tsconfig.app.json` y `vite.config.ts`).
- Tokens Rentia heredados de `rentia-app-mobile/src/shared/theme/tokens.ts`. Exportados como custom properties en `src/app/styles/index.css` y disponibles como utilidades Tailwind: `bg-rentia-ink-900`, `text-rentia-teal`, etc.
- TODOs pendientes de cierre legal se marcan con el componente `<TodoBadge>` para que sean inmediatamente visibles incluso en producción mientras no se han completado.
