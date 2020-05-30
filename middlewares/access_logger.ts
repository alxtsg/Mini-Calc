import { Context } from "../deps.ts";

export default async (ctx: Context, next: () => Promise<void>) => {
  const log = {
    timestamp: (new Date()).toISOString(),
    method: ctx.request.method,
    path: ctx.request.url.pathname,
  };
  console.log(JSON.stringify(log));
  await next();
};
