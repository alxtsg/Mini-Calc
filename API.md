# API #

## Description ##

The application offers a set of APIs that can be accessed over HTTP.

The request body and response body is encoded in JSON.

## Health check API ##

### Get application health ###

* Path: `/api/health`
* Method: `GET`

Sample request (cURL):

```
curl -v \
  http://127.0.0.1:8080/api/health
```

Sample response:

```
{
  "isSuccess": true
}
```

## Calculation API ##

### New calculation ###

* Path: `/api/calculation`
* Method: `POST`
* Headers:
  * `Content-Type`: `application/json`
* Parameters:
  * `operator`: `"add"` (addition), `"sub"` (subtraction), `"mul"`
                (multiplication), or `"div"` (division)
  * `operand1`: Operand. Must be an integer. Required.
  * `operand2`: Operand. Must be an integer. Required.

For division, only the quotient is returned as the result.

Sample request (cURL) (valid calculation):

```
curl -v \
  --header 'Content-Type: application/json' \
  --data '{"operator": "add", "operand1": 1, "operand2": 2}' \
  http://127.0.0.1:8080/api/calculation
```

Sample response:

```
{
  "isSuccess": true,
  "error": null,
  "result": {
    "expression": "1 + 2",
    "result": 3
  }
}
```

Sample request (cURL) (invalid operator):

```
curl -v \
  --header 'Content-Type: application/json' \
  --data '{"operator": "something", "operand1": 1, "operand2": 2}' \
  http://127.0.0.1:8080/api/calculation
```

Sample response:

```
{
  "isSuccess": false,
  "error": "Invalid operatior.",
  "result": null
}
```
