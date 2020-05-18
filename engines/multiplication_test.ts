/// <reference path="../lib.deno.d.ts" />

import { assertStrictEq } from "https://deno.land/std@v0.51.0/testing/asserts.ts";

import MultiplicationEngine from "./multiplication.ts";
import { Operator, CalculationRequest } from "../types.ts";

const engine = new MultiplicationEngine();

Deno.test("multiply 2 positive numbers", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.mul,
    operand1: 2,
    operand2: 4,
  };
  assertStrictEq(engine.calculate(calculation).result, 8);
});

Deno.test("multiply 2 negative numbers", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.mul,
    operand1: -2,
    operand2: -4,
  };
  assertStrictEq(engine.calculate(calculation).result, 8);
});

Deno.test("multiply a positive number by a negative number", (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.mul,
    operand1: 2,
    operand2: -4,
  };
  assertStrictEq(engine.calculate(calculation).result, -8);
});
