var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('triggered', req.body);
  fs.writeFile(__dirname + '/../dump/' + Date.now() + '.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(200).end();
});

module.exports = router;
