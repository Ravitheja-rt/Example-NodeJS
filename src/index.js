var express = require('express')
var app = express()

app.get('/',function(req,res){

  res.send('Hi Raghudhar')
})

var server = app.listen(3000, function(){
    console.log('Server is running at http://localhost:' + server.address().port)


})