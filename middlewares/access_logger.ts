import { Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";

export default async (ctx: Context, next: () => Promise<void>) => {
  const log = {
    timestamp: (new Date()).toISOString(),
    method: ctx.request.method,
    path: ctx.request.url.pathname,
  };
  console.log(JSON.stringify(log));
  await next();
};
