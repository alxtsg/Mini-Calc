/// <reference path="../lib.deno.d.ts" />

import { assertStrictEq } from "../deps.ts";
import SubtractionEngine from "./subtraction.ts";
import { Operator, CalculationRequest } from "../types.ts";

const engine = new SubtractionEngine();

Deno.test("subtract a positive number from a positive number", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.sub,
    operand1: 3,
    operand2: 2,
  };
  assertStrictEq(engine.calculate(calculation).result, 1);
});

Deno.test("subtract a negative number from a positive number", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.sub,
    operand1: 3,
    operand2: -2,
  };
  assertStrictEq(engine.calculate(calculation).result, 5);
});

Deno.test("subtract a negative number from a negative number", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.sub,
    operand1: -3,
    operand2: -2,
  };
  assertStrictEq(engine.calculate(calculation).result, -1);
});
