/// <reference path="./lib.deno.d.ts" />

import { assertStrictEq } from 'https://deno.land/std@v0.51.0/testing/asserts.ts';

import app from './app.ts';
import config from './config.ts';

const hostname: string = '127.0.0.1';
const endpoint: string = `http://${hostname}:${config.port}`;

// There is a known bug which prevents the server from shutting down.
// Always disable this test for now.
// See: https://github.com/oakserver/oak/issues/77
const IS_ENABLED: boolean = false;

const controller: AbortController = new AbortController();

const start = (): Promise<void> => app.listen({
  hostname,
  port: config.port,
  signal: controller.signal
});

Deno.test({
  name: 'health check API',
  ignore: !IS_ENABLED,
  async fn () {
    const instance = start();
    const response = await fetch(`${endpoint}/api/health`);
    assertStrictEq(response.status, 200);
    controller.abort();
    await instance;
  }
});
