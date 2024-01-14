const app = require('./app')
// const express = require('express');
const PORT = process.env.PORT;

app.listen(PORT, function(req, res){
    console.log('Application Run Success with Port: ' + PORT)
})