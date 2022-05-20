# animal age api

Serverless project with an API endpoint to get cat and dog years based on the human age given

Make sure you're on node 14.x

## How to test
- `npm install`
- `npm run invoke-local-animal-age`
- Change test input by editing `src/animal_age_get/event.json`

## How to deploy
- `npm install`
- export AWS credentials to terminal
- `npm run deploy`
- Call the endpoint in the output with a query string param 'age'

## Endpoint
animal_age_get which takes in 'age' as a query string parameter

e.g.

`https://xxxxx.execute-api.eu-west-1.amazonaws.com/prod/animal?age=2`

Example response with `?age=5`
```json
{
    "humanYears": 5,
    "catYears": 36,
    "dogYears": 39
}
```
