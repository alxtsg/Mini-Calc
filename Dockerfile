FROM hayd/alpine-deno:1.0.0

EXPOSE 8080

WORKDIR /app

# Prefer not to run as root.
USER deno

ADD . .

CMD ["run", "--allow-read=/app", "--allow-net", "main.ts"]
