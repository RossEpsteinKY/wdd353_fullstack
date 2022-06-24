const express = require('express');
const res = require("express/lib/response");
const router = express.Router();
const getLogin = require('../api/api/api');

router.get('/', (req,res) =>{
        res.render('index',{
            pagename: "Home"
        });
});

router.get('/about', (req,res) =>{
    res.render('about',{
        pagename: "About"
    });
});

router.get('/portfolio', (req,res) =>{
    res.render('portfolio',{
        pagename: "Portfolio"
    });
});

router.get('/login', (req,res) =>{
    res.render('login',{
        pagename: "Login"
    });
});

router.get('/registration', (req,res) =>{
    res.render('registration',{
        pagename: "Registration"
    });
});

router.post('/registration', (req,res) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    if(req){

    }else{

    }

});

// router.post('/login', async (res,req) => {
//     const userid = req.body.username;
//     const password = req.body.password;
//
//
//     if(req){
//
//
//     }else{
//
//     }
// })
module.exports = router;
