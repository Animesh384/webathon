const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/register',(req,res)=>{
    res.render('register');
}); 

router.get('/login', function(req, res) {
    res.render('login')
});
router.get('/forgot', function(req, res) {
    res.render('forgot')
});

module.exports = router;