export class InvalidEnvConfigError extends Error {
}

export class InvalidAPIRequestError extends Error {
}

export class ArithmeticError extends Error {
}

export class UnknownOperatorError extends Error {
  constructor (unknownOperator: string) {
    super(`Unknown operator ${unknownOperator}.`);
  }
}
