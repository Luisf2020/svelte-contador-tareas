# svelte-contador-tareas

![stack: Svelte 4](https://img.shields.io/badge/stack--Svelte%204-0d9488?style=flat-square) ![stack: Vite](https://img.shields.io/badge/stack--Vite-0d9488?style=flat-square) ![stack: Stores](https://img.shields.io/badge/stack--Stores-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Lista de tareas en Svelte con stores (writable/derived) y componentes reactivos.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Mantener dos vistas de la misma informacion (lista y contador) coherentes sin prop drilling.

## Solucion implementada

Stores writable y derived: el contador se calcula del store de tareas y el componente se suscribe automaticamente.

### Funcionalidades principales

- Store writable con operaciones puras
- Store derived para el contador
- Reactividad de Svelte sin boilerplate
- Estilos con scope de componente

## Stack

- Svelte 4
- Vite
- Stores

## Estructura

```
src/stores.js    # estado con stores
src/App.svelte   # componente
src/main.js
```

## Puesta en marcha

```bash
npm install
npm run dev
```

## Complejidad del proyecto

**Nivel: Principiante** — Un componente y un modulo de estado; sin backend ni persistencia.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Pendiente de construir y publicar.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
