FROM hayd/alpine-deno:1.0.1

EXPOSE 8080

ENV APP_HOME=/home/deno/app
ENV DENO_DIR=${APP_HOME}/deps

WORKDIR $APP_HOME

RUN chown -R deno:deno /home/deno

ADD --chown=deno:deno . .

# Prefer not to run as root.
USER deno

RUN deno cache main.ts

CMD ["run", "--allow-read=/home/deno/app", "--allow-net", "main.ts"]
