export interface EnvConfig {
  port: number
}

export enum Operator {
  add = 'add',
  sub = 'sub',
  mul = 'mul',
  div = 'div'
}

export interface CalculationRequest {
  operator: Operator,
  operand1: number,
  operand2: number
};

export interface CalculationResult {
  expression: string,
  result: number
};

export interface CalculationResponseBody {
  isSuccess: boolean,
  error: string | null,
  result: CalculationResult | null
}

export interface HealthCheckResponseBody {
  isSuccess: boolean
}
