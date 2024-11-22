# Backend Portfolio - HK4U-DXV

Backend API Rest para el portafolio personal, construido con Node.js, Express y TypeScript.

## 🛠 Tecnologías

- Node.js
- TypeScript
- Express.js
- PostgreSQL (@vercel/postgres)
- ESM Modules
- Vercel

## 📁 Estructura Base del Proyecto

```bash
backend.hk4u-dxv.portfolio/
├── src/
│   ├── config/         # Configuraciones (database, server, cors, etc)
│   ├── controllers/    # Controladores de rutas
│   ├── db/             # Configuración y modelos de base de datos
│   ├── middlewares/    # Middlewares de Express
│   ├── routes/         # Definición de rutas
│   ├── services/       # Servicios de la aplicación
│   ├── utils/
│   │     └── logger.ts
│   │     └── constants.ts
│   └── app.ts          # Punto de entrada de la aplicación
├── .env                # Variables de entorno
├── .env.example        
├── .gitignore
├── .npmrc
├── package.json
├── tsconfig.json
├── vercel.json
└── pnpm-lock.yaml
```

## 🚀 Inicio Rápido

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/hk4u-dxv/backend.hk4u-dxv.portfolio.git
   cd backend.hk4u-dxv.portfolio
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env
   ```

4. **Desarrollo local**

   ```bash
   pnpm dev
   ```

5. **Producción**

   ```bash
   pnpm build
   pnpm start
   ```

## 📝 Scripts Disponibles

- `pnpm dev`: Inicia el servidor en modo desarrollo con hot-reload
- `pnpm build`: Compila el proyecto para producción
- `pnpm start`: Inicia el servidor en modo producción

## 🥷 Autor

Github: [@hk4u-dxv](https://github.com/hk4u-dxv)
