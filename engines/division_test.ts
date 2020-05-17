/// <reference path="../lib.deno.d.ts" />

import { assertStrictEq } from 'https://deno.land/std@v0.51.0/testing/asserts.ts';

import DivisionEngine from './division.ts';
import { Operator, CalculationRequest } from '../types.ts';

const engine = new DivisionEngine();

Deno.test('divide a positive number by a positive number', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.div,
    operand1: 8,
    operand2: 4
  };
  assertStrictEq(engine.calculate(calculation).result, 2);
});

Deno.test('divide a negative number by a positive number', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.div,
    operand1: -8,
    operand2: 4
  };
  assertStrictEq(engine.calculate(calculation).result, -2);
});

Deno.test('divide a positive number by a negative number', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.div,
    operand1: 8,
    operand2: -4
  };
  assertStrictEq(engine.calculate(calculation).result, -2);
});

Deno.test('divide a negative number by a negative number', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.div,
    operand1: -8,
    operand2: -4
  };
  assertStrictEq(engine.calculate(calculation).result, 2);
});

Deno.test('only the quotient is returned from division', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.div,
    operand1: 7,
    operand2: 3
  };
  assertStrictEq(engine.calculate(calculation).result, 2);
});
