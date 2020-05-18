import Engine from "./engine.ts";
import { CalculationRequest, CalculationResult } from "../types.ts";

export default class Addition extends Engine {
  constructor() {
    super("Addition");
  }

  calculate(request: CalculationRequest): CalculationResult {
    const expression = `${request.operand1} + ${request.operand2}`;
    console.log(`${this.name} engine: ${expression}`);
    return {
      expression,
      result: request.operand1 + request.operand2,
    };
  }
}
