import Engine from '../engines/engine.ts';
import AdditionEngine from '../engines/addition.ts';
import DivisionEngine from '../engines/division.ts';
import MultiplicationEngine from '../engines/multiplication.ts';
import SubtractionEngine from '../engines/subtraction.ts';
import { Operator, CalculationRequest, CalculationResult } from '../types.ts'
import { UnknownOperatorError } from '../error.ts'

export default class CalculationService {

  #engines: Map<Operator, Engine>;

  constructor () {
    this.#engines = new Map([
      [Operator.add, new AdditionEngine()],
      [Operator.div, new DivisionEngine()],
      [Operator.mul, new MultiplicationEngine()],
      [Operator.sub, new SubtractionEngine()],
    ]);
  }

  process (request: CalculationRequest): CalculationResult {
    const engine = this.#engines.get(request.operator);
    if (engine === undefined) {
      throw new UnknownOperatorError(request.operator);
    }
    return engine.calculate(request);
  }
}
