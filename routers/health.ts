import { Router } from "../deps.ts";
import { HealthCheckResponseBody } from "../types.ts";

const router = new Router();

router.get("/api/health", (ctx) => {
  const body: HealthCheckResponseBody = {
    isSuccess: true,
  };
  ctx.response.type = "application/json";
  ctx.response.body = body;
});

export default router;
