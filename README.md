# medidas-operativas — Scaffold del Proyecto Web

Este directorio contiene el código fuente del portal web "Medidas Operativas"
(Marco de Conciliación y Corresponsabilidad Bilateral de Sanesca).

## Estructura del Proyecto

```
medidas-operativas/
├── index.html              → Página principal (SPA)
├── data/
│   └── conciliacion.json   → Contrato de datos (fuente de verdad para la UI)
├── assets/
│   ├── logo-sanesca.png    → Logo de Sanesca
│   └── favicon.ico         → Favicon
├── js/
│   └── app.js              → Lógica Alpine.js (simulador, filtros, glosario)
├── css/
│   └── custom.css          → Estilos adicionales (si Tailwind CDN no cubre)
├── .github/
│   └── workflows/
│       └── deploy.yml      → GitHub Actions: deploy a GitHub Pages
├── .gitignore
└── README.md               → Documentación del repositorio
```

## Stack Técnico
- HTML5 Semántico
- Tailwind CSS (CDN)
- Alpine.js (~15 KB)
- Chart.js (~15 KB) — Gráficos estadísticos
- Mermaid.js (~20 KB) — Diagramas de flujo industrial
- GitHub Pages (hosting gratuito)
