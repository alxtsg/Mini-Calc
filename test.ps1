$SCRIPT_DIR=$PSScriptRoot

Set-Location "${SCRIPT_DIR}"

deno test --allow-read="${SCRIPT_DIR}" --allow-net
