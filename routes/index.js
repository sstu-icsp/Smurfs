var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(!req.session.user){
    res.redirect("/auth");
  }
  else res.render("index");
});
router.post('/', (req, res) => {
  if(req){
    res.send(req.body);
  }
});

module.exports = router;
