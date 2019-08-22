var express = require('express')
var fs = require('fs')
var https = require('https')
var cors = require('cors');
var app = express()

var bundleJSON = require('./src/resources/bundle.json')

app.use(express.static('src/html',{index:false, extensions:['html']}))
app.use(express.static('src/javascript'))
app.use(express.static('src/img'))
app.use(cors());

app.get('/bundle.json', function (req, res){
    res.header("Content-Type",'application/json')
    res.send(JSON.stringify(bundleJSON))
})

https.createServer({
  key: fs.readFileSync('certs/key.key'),
  cert: fs.readFileSync('certs/cert.crt')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})