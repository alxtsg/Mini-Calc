import { Request } from "../deps.ts";
import { Operator, CalculationRequest } from "../types.ts";
import { InvalidAPIRequestError } from "../error.ts";

const RADIX = 10;

export default async (request: Request): Promise<CalculationRequest> => {
  if (!request.hasBody) {
    throw new InvalidAPIRequestError("Missing operation details.");
  }
  const requestBody = await request.body();
  if (requestBody.type !== "json") {
    throw new InvalidAPIRequestError("Invalid operation details.");
  }
  if (!Object.prototype.hasOwnProperty.call(requestBody.value, "operator")) {
    throw new InvalidAPIRequestError("Missing operatior.");
  }
  if (!(requestBody.value.operator in Operator)) {
    throw new InvalidAPIRequestError("Invalid operatior.");
  }
  if (!Object.prototype.hasOwnProperty.call(requestBody.value, "operand1")) {
    throw new InvalidAPIRequestError("Missing operand 1.");
  }
  if (!Number.isInteger(requestBody.value.operand1)) {
    throw new InvalidAPIRequestError("The operand 1 is not an integer.");
  }
  if (!Object.prototype.hasOwnProperty.call(requestBody.value, "operand2")) {
    throw new InvalidAPIRequestError("Missing operand 2.");
  }
  if (!Number.isInteger(requestBody.value.operand2)) {
    throw new InvalidAPIRequestError("The operand 2 is not an integer.");
  }
  const calculation: CalculationRequest = {
    operator: requestBody.value.operator,
    operand1: Number.parseInt(requestBody.value.operand1, RADIX),
    operand2: Number.parseInt(requestBody.value.operand2, RADIX),
  };
  return calculation;
};
