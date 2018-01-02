var express = require('express');
var path = require('path');
var router = express.Router();
var userController = require('../Controllers/UserController');
// var dbManager = require('../DbHandler/DbManager');
/* GET home page. */
router.get('/', function(req, res, next) {
      // var con =dbManager();
      // if(con){
      //     console.log('connected');
      // }
    res.sendFile(path.join(baseDirectory,'public', 'Views', 'home.html'));

    // res.render('index', { title: 'Express' });

});

router.get('/signup',function (req,res,next) {
    res.sendFile(path.join(baseDirectory,'public','Views','SignUp.html'));
})

router.post('/UserRegistration',function (req,res) {
    userController.registerUser(req.body);
    // res.send(req.body);


})
module.exports = router;
