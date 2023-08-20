import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.json";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);
app.use(errorHandler);

export { app };
