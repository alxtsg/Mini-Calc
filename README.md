# Mini-Calc #

## Description ##

Mini calculator API built with Deno.

## Requirements ##

* Deno (`>=1.0.0`).


## Configuration ##

Make a copy of `.env.example` and name the new file as `.env`. The `.env` file
controls the following:

* `PORT`: The port that the server will listen on.

## Usage ##

Run the application directly using Deno, or run it inside a Docker container.

### Run with Deno ###

Run the application using Deno:

```
deno run --allow-read="${SCRIPT_DIR}" --allow-net main.ts
```

`${SCRIPT_DIR}` is the directory where the application is installed to. For
example, if the application is installed to `/home/user/mini-calc`, then:

```
deno run --allow-read=/home/user/mini-calc --allow-net main.ts
```

### Run with Docker ###

Make sure Docker has been installed on the system.

Build the Docker image:

```
docker build -t mini-calc .
```

Run the Docker image in a new container:

```
docker run -d -p 127.0.0.1:8080:8080 --rm --name mini-calc mini-calc
```

Now the requests can be sent to `127.0.0.1:8080`. Adjust the `-p` option if
necessary.

## License ##

[The BSD 3-Clause License](http://opensource.org/licenses/BSD-3-Clause)
