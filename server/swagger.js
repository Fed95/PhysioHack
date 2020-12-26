const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']
const doc = {
    consumes: ['application/json'],
    produces: ['application/json'],
}
swaggerAutogen(outputFile, endpointsFiles, doc)
