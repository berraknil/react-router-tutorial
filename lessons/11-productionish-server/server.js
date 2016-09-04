var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
app.use(compression())

//serve static stuffs like css
app.use(express.static(path.join(__dirname, 'public')))

//send all requests to index.html so browserHistory works!
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express Server Running  at localhost:' + PORT)
})