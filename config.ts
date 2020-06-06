import { config } from "./deps.ts";
import { InvalidEnvConfigError } from "./error.ts";
import { EnvConfig } from "./types.ts";

const RADIX: number = 10;
const PORT_LOWER: number = 0;
const PORT_UPPER: number = 65535;

const env = config();
const port: number = Number.parseInt(env.PORT, RADIX);
if (Number.isNaN(port) || (port <= PORT_LOWER) || (port > PORT_UPPER)) {
  throw new InvalidEnvConfigError("Invalid port number.");
}

const envConfig: EnvConfig = {
  port,
};

export default envConfig;
