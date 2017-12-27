# faultyserver
Simulating non-redundant servers.

## How to install:
```
npm install express
```

## How to run:
```
node app.js 0.5
```
0.5 -> 50% of the responses will be 200 OK, the rest will be 500 Error.
The parameter could be any floating point number between 0 and 1 (exlusive).

