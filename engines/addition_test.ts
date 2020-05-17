/// <reference path="../lib.deno.d.ts" />

import { assertStrictEq } from 'https://deno.land/std@v0.51.0/testing/asserts.ts';

import AdditionEngine from './addition.ts';
import { Operator, CalculationRequest } from '../types.ts';

const engine = new AdditionEngine();

Deno.test('add 2 positive numbers', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.add,
    operand1: 1,
    operand2: 2
  };
  assertStrictEq(engine.calculate(calculation).result, 3);
});

Deno.test('add 2 negative numbers', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.add,
    operand1: -1,
    operand2: -2
  };
  assertStrictEq(engine.calculate(calculation).result, -3);
});

Deno.test('add a positive number and a negative number', (): void => {
  const calculation: CalculationRequest = {
    operator: Operator.add,
    operand1: 1,
    operand2: -2
  };
  assertStrictEq(engine.calculate(calculation).result, -1);
});
