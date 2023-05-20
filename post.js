// const express=require('express');
// const router=express.Router();
// router.route('/post:slug').all(function(req,res, next){res.send('/post')}).
// get(function(req,res,next){res.send('/post')})
// .put(function(req, res, next){res.send('/post')}).
// post(function(req, res, next){res.send('/post')}).
// del(function(req, res, next){res.send('/post')});

// module.exports=router
const post=require('./post');
app.use('/blog,post');