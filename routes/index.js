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


});

router.get('/login', function (req, res) {
    res.sendFile(path.join(baseDirectory, 'public', 'Views', 'login.html'));
})

router.all('/SignIn', function (req, res) {
// var authenticated=false;

    // req.body.Email="df@df.com";
    //checking seesion
    //console.log("req.body........",req.body);
    //console.log("req.router........",req.router);
    //console.log("req.header........",req.header.username);
    //console.log("res.data........",res.data);
    // console.log("res.body........",JSON.stringify(res.));
    // console.log("response..........",res);

    userController.logIn(req.body,function (result) {
        // console.log("error in index......",err);
        console.log("result in index.....",result);
        // if ((req.body.Email===result.data.Email)&&(req.body.Password===result.data.Password)){
        //     // req.session.user=result.data.username;
        //     // console.log("req.session..........",req.session);
        //     // console.log("req.session.user...............",req.session.user);
        //     console.log(JSON.stringify(result));
        // }
        return res.json(result);
    })

    /*user.logIn(req,function (response) {
      console.log(JSON.stringify(response));
      return response;
    })*/
})



module.exports = router;
