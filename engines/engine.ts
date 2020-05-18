import { CalculationRequest, CalculationResult } from "../types.ts";

export default abstract class Engine {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract calculate(request: CalculationRequest): CalculationResult;
}
