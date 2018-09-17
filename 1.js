const express = require('express')
const app = express()

var currentEmail = ''
var adr = ''
var user = ''
var userNum = 29;

app.get('/saveemail', function userIdHandler(req, res) {
    var a = req.query.email;
    currentEmail = a
    res.type('application/json');
    res.jsonp({ new: true });
});
app.get('/saveadr', function userIdHandler(req, res) {
    var a = req.query.harf;
    adr = a
});

app.get('/getemail', function userIdHandler(req, res) {
    res.type('application/json');
    res.jsonp({ email: currentEmail });
});
app.get('/getadr', function userIdHandler(req, res) {
    res.type('application/json');
    res.jsonp({ harf: adr });
});
app.get('/getuser', function userIdHandler(req, res) {
    user= 'ZZQ4' + userNum
    userNum +=1
    console.log('获得新账号'+user)
    res.type('application/json');
    res.jsonp({ user: user });
});
app.get('/user', function userIdHandler(req, res) {
    res.type('application/json');
    res.jsonp({ user: user });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))

