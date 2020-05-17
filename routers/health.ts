import { Router } from 'https://deno.land/x/oak@v4.0.0/mod.ts';

import { HealthCheckResponseBody } from '../types.ts';

const router = new Router();

router.get('/api/health', (ctx) => {
  const body: HealthCheckResponseBody = {
    isSuccess: true
  }
  ctx.response.type = 'application/json';
  ctx.response.body = body;
});

export default router;
