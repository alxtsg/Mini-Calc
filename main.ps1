$SCRIPT_DIR=$PSScriptRoot

# Uncomment the following when deployed to the production, so the dependencies
# are downloaded on first startup only.
# $Env:DENO_DIR="${SCRIPT_DIR}\deps"

Set-Location "${SCRIPT_DIR}"

deno run --allow-read="${SCRIPT_DIR}" --allow-net main.ts
