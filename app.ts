import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";

import accessLogger from "./middlewares/access_logger.ts";

import healthRouter from "./routers/health.ts";
import calculationRouter from "./routers/calculation.ts";

const app = new Application();

app.use(accessLogger);

app.use(healthRouter.routes());
app.use(calculationRouter.routes());

export default app;
