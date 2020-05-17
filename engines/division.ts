import Engine from './engine.ts';
import { CalculationRequest, CalculationResult } from '../types.ts'
import { ArithmeticError } from '../error.ts'

export default class Division extends Engine{

  constructor () {
    super('Division');
  }

  calculate(request: CalculationRequest): CalculationResult {
    const expression = `${request.operand1} ÷ ${request.operand2}`;
    console.log(`${this.name} engine: ${expression}`);
    if (request.operand2 === 0) {
      throw new ArithmeticError('Divisor is 0.');
    }
    return {
      expression,
      result: Math.floor(request.operand1 / request.operand2)
    }
  }
}
