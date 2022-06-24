const express = require('express');
const res = require("express/lib/response");
const router = express.Router();

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

    // var registrationCheck = require("../public/scripts/registration");
    // registrationCheck.checkForm(req);

    // console.log('hits');
    // if(req.body.firstName == ''){
    //     registration.firstName.error = true;
    // }else {
    //     console.log(req.body.firstName);
    // }
    // const nameRequired = 'Name is required!';
    // const emailRequired = 'Email is required!';
    // const emailNotValid = 'Email is wrong!';
    // const mobileRequired = 'Mobile is required!';



    // console.log("the name is:  " + username);
    //
    // // Form.create(f,function(err,newlyCreatedForm){
    // //     if(err)
    // //     {
    // //         console.log(err);
    // //     }else{
    // //         res.redirect("/result");
    // //     }
    // // });
});
module.exports = router;
