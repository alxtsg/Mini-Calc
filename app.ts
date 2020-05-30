import { Application } from "./deps.ts";
import accessLogger from "./middlewares/access_logger.ts";
import calculationRouter from "./routers/calculation.ts";
import healthRouter from "./routers/health.ts";

const app = new Application();

app.use(accessLogger);

app.use(healthRouter.routes());
app.use(calculationRouter.routes());

export default app;
