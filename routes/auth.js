var express = require('express');
var router = express.Router();
var User = require('../schemas/User');
router.get('/auth', function(req, res, next) {
  if(req.session.user){res.redirect('/');}
  else res.render('auth');
});
router.post('/auth', (req, res,next) => {
  if(req.session.user){res.redirect('/');}
  else{User.findOne({username:req.body.login},function(err,result){
      if(result.checkPassword(req.body.password)){
        req.session.user = {id:result._id,name:result.username};
        res.redirect('/');
      }
      else res.send("Логин или пароль неверны");
  });
}});
router.get('/logout',(req,res,next)=>{
  if(req.session.user){
    delete req.session.user;
    res.redirect('/');
  }
});

module.exports = router;
