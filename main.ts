import app from './app.ts';
import config from './config.ts';

console.log(`Start server, listen on port ${config.port}.`);
await app.listen({
  port: config.port
});
