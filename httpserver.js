// Create express app
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const axios = require('axios')

const baseURL = 'http://ec2-54-145-74-250.compute-1.amazonaws.com'
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express()

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT))
})
app.use(cors())
// Root endpoint
app.get('/', (req, res, next) => {
  console.log(req)
  res.json({ message: 'Ok' })
})
app.post('/process_post', urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  const response = {
    temp1: req.body.temp1

  }
  console.log(response)
  axios.post(
    `${baseURL}/api/v1/DxxljI4aKBOO19zf5LPB/telemetry`,
    response
  ).then(res => {
    console.log(res.status)
  })
  res.end(JSON.stringify(response))
})
// Default response for any other request
app.use(function (req, res) {
  res.status(404)
})
