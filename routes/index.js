var express=require('express');

var router=express.Router();

var homeController=require('../controller/home_controller')

router.get('/',homeController.home);

router.use('/user',require('./users'));

module.exports=router;

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));