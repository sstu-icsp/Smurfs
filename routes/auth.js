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
<<<<<<< HEAD
      if(result){
        if(result.checkPassword(req.body.password)){
          req.session.user = {id:result._id,name:result.username};
          res.redirect('/');
        }
        else res.send("Логин или пароль неверны");
=======
    if(result){
      if(result.checkPassword(req.body.password)){
        req.session.user = {id:result._id,name:result.username};
        res.redirect('/');
      }
      else res.send("Логин или пароль неверны");
>>>>>>> ff4afba831f6bec930ef5479151a2b872d259cc1
    }else res.send("Пользователь не существует");
  });
}});
router.get('/logout',(req,res,next)=>{
  if(req.session.user){
    delete req.session.user;
    res.redirect('/');
  }
});

module.exports = router;
