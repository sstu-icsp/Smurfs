var express = require('express');
var router = express.Router();
var User = require('../schemas/User');
router.get('/registration', function(req, res, next) {
  if(req.session.user){res.redirect('/');}
  else res.render('registration');
});
router.post('/registration', (req, res,next) => {
  if(req.session.user){res.redirect('/');}
  else{if(req.body.login && req.body.password2 && req.body.password){
    User.findOne({username:req.body.login},function(err,user){
      if(err) next();
      if(user){
        res.send("Пользователь существует!");
      }
      else{
        if(req.body.password === req.body.password2){
          let user = new User({username:req.body.login,password:req.body.password});
          user.save(function(err,result){
            res.send("Пользователь сохранен");
          });
        }
        else res.send("Пароли не равны");
      }
    });
}
}}  );

module.exports = router;
