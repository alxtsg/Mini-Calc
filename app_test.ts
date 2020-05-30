/// <reference path="./lib.deno.d.ts" />

import app from "./app.ts";
import config from "./config.ts";
import {
  assertNotEquals,
  assertStrictEq
} from "./deps.ts";

const hostname: string = "127.0.0.1";
const endpoint: string = `http://${hostname}:${config.port}`;

const start = (controller: AbortController): Promise<void> =>
  app.listen({
    hostname,
    port: config.port,
    signal: controller.signal,
  });

Deno.test("health check API", async (): Promise<void> => {
  const controller: AbortController = new AbortController();
  const instance = start(controller);
  const response = await fetch(`${endpoint}/api/health`);
  assertStrictEq(response.status, 200);
  const responseJSON = await response.json();
  assertStrictEq(responseJSON.isSuccess, true);
  controller.abort();
  await instance;
});

Deno.test("calculate API with valid request", async (): Promise<void> => {
  const controller: AbortController = new AbortController();
  const instance = start(controller);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(
    `${endpoint}/api/calculation`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        operator: "add",
        operand1: 3,
        operand2: 7,
      }),
    },
  );
  assertStrictEq(response.status, 200);
  const responseJSON = await response.json();
  assertStrictEq(responseJSON.isSuccess, true);
  assertStrictEq(responseJSON.error, null);
  assertStrictEq(responseJSON.result.result, 10);
  controller.abort();
  await instance;
});

Deno.test("calculate API with invalid request", async (): Promise<void> => {
  const controller: AbortController = new AbortController();
  const instance = start(controller);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(
    `${endpoint}/api/calculation`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        operator: "invalid",
        operand1: 3,
        operand2: 7,
      }),
    },
  );
  assertStrictEq(response.status, 200);
  const responseJSON = await response.json();
  assertStrictEq(responseJSON.isSuccess, false);
  assertNotEquals(responseJSON.error, null);
  controller.abort();
  await instance;
});
