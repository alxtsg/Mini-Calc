import { config } from "https://deno.land/x/dotenv@v0.3.0/mod.ts";

import { InvalidEnvConfigError } from "./error.ts";
import { EnvConfig } from "./types.ts";

const RADIX = 10;
const PORT_LOWER = 0;
const PORT_UPPER = 65535;

const env = config();
const port: number = Number.parseInt(env.PORT, RADIX);
if (Number.isNaN(port) || (port <= PORT_LOWER) || (port > PORT_UPPER)) {
  throw new InvalidEnvConfigError("Invalid port number.");
}

const envConfig: EnvConfig = {
  port,
};

export default envConfig;
