import './config/env'; 
import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { formatLog, log } from "@utils/logger";
import { LOG_SYMBOLS, STATUS_MESSAGES, HTTP_STATUS } from "@utils/constants";
import { PORT, CORS_OPTIONS } from "@config/config";
import routes from "@routes/index";
import { errorHandler } from "@middlewares/errorHandler";

const app: Express = express();

// Middlewares
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(
  morgan(":method :url :status :response-time ms", {
    skip: (req: Request) => req.url === "/favicon.ico",
    stream: {
      write: (message: string) => {
        const [method, url, status, time] = message.split(" ");
        console.log(
          formatLog(new Date().toLocaleTimeString(), "muted"),
          formatLog(method, "primary"),
          formatLog(url, "muted"),
          parseInt(status) >= HTTP_STATUS.BAD_REQUEST
            ? formatLog(status, "error")
            : formatLog(status, "success"),
          formatLog(`${time.trim()}ms`, "warning")
        );
      },
    },
  })
);

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Backend API - HK4U-DXV Portfolio",
    version: process.env.npm_package_version,
    status: "active",
  });
});

// Prefix all routes with /api
app.use("/api", routes);

// Error Handler
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await new Promise<void>((resolve) => {
      app.listen(PORT, () => {
        resolve();
      });
    });

    console.log(`
${formatLog(STATUS_MESSAGES.SERVER_STARTED, "heading")} ${formatLog(
      "v1.0.0",
      "success"
    )}
${formatLog(LOG_SYMBOLS.SEPARATOR, "border")}
   ${formatLog(LOG_SYMBOLS.BULLET, "accent")} URL:         ${formatLog(
      `http://localhost:${PORT}`,
      "primary"
    )}
   ${formatLog(LOG_SYMBOLS.BULLET, "accent")} Modo:        ${formatLog(
      process.env.NODE_ENV || "development",
      "warning"
    )}
   ${formatLog(LOG_SYMBOLS.BULLET, "accent")} Database:    ${formatLog(
      "postgres@localhost",
      "info"
    )} ${formatLog("(PostgreSQL)", "muted")}
   ${formatLog(LOG_SYMBOLS.BULLET, "accent")} Hora:        ${formatLog(
      new Date().toLocaleString("es-MX"),
      "text"
    )}
${formatLog(LOG_SYMBOLS.SEPARATOR, "border")}\n`);
  } catch (error) {
    log.error(`Error starting server: ${error}`);
    process.exit(1);
  }
};

startServer();

export default app;
