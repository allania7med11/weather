const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

let projectData=[{name:"w1"},{name:"w2"}]
app.get('/', function (req, res) {
  res.send(projectData)
})
 
app.listen(3000)