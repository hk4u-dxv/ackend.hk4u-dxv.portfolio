# Backend Portfolio - HK4U-DXV

Backend API para el portafolio personal, construido con Node.js, Express y TypeScript.

## 🛠 Tecnologías

- Node.js (v21.7.0)
- TypeScript
- Express.js
- PostgreSQL (@vercel/postgres)
- ESM Modules
- Vercel (Futuro despliegue)

## 📁 Estructura Base del Proyecto

```bash
backend.hk4u-dxv.portfolio/
├── src/
│   ├── config/         # Configuraciones (database, server, cors, etc)
│   ├── controllers/    # Controladores de rutas
│   ├── db/             # Configuración y modelos de base de datos
│   ├── middlewares/    # Middlewares de Express
│   ├── routes/         # Definición de rutas
│   ├── utils/
│   │     └── logger.ts
│   │     └── constants.ts
│   └── app.ts          # Punto de entrada de la aplicación
├── .env                # Variables de entorno
├── .env.example        
├── .gitignore          
├── .yarnrc.yml         
├── package.json        
├── tsconfig.json       
├── vercel.json         
└── yarn.lock           
```

## 🚀 Inicio Rápido

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/hk4u-dxv/backend.hk4u-dxv.portfolio.git
   cd backend.hk4u-dxv.portfolio

   ```

2. **Instalar dependencias**

   ```bash
   yarn install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env
   ```

4. **Desarrollo local**

   ```bash
   yarn dev
   ```

5. **Producción**

   ```bash
   yarn build
   yarn start
   ```

## 📝 Scripts Disponibles

- `yarn dev`: Inicia el servidor en modo desarrollo con hot-reload
- `yarn build`: Compila el proyecto para producción
- `yarn start`: Inicia el servidor en modo producción
- `yarn test`: Ejecuta los tests (por implementar)

## 🥷 Autor

Github: [@hk4u-dxv](https://github.com/hk4u-dxv)
