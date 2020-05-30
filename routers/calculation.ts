import CalculationService from "../services/calculation.ts";
import { Router } from "../deps.ts";
import extractOperation from "../api_utils/extract_operation.ts";
import {
  CalculationRequest,
  CalculationResult,
  CalculationResponseBody,
} from "../types.ts";

const router = new Router();
const service = new CalculationService();

router.post("/api/calculation", async (ctx) => {
  let body: CalculationResponseBody;
  try {
    const calculation: CalculationRequest = await extractOperation(ctx.request);
    const result: CalculationResult = service.process(calculation);
    body = {
      isSuccess: true,
      error: null,
      result,
    };
  } catch (error) {
    body = {
      isSuccess: false,
      error: error.message,
      result: null,
    };
  }
  ctx.response.type = "application/json";
  ctx.response.body = body;
});

export default router;
