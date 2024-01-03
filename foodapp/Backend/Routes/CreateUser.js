const express=require("express");
const router=express.Router();
const User=require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt=require("jsonwebtoken")
const bycrypt=require("bcryptjs")


router.post("/createuser",
// username must be an email
body('email').isEmail(),
body('name',"Name should be character").isAlpha(),
body('password',"Password length at least 5 character").isLength({ min: 5}),

async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt =await bycrypt.genSalt(10)
    const securePass=await bycrypt.hash(req.body.password,salt)
    try {
      await  User.create({
            name:req.body.name,
            location: req.body.location,
            email: req.body.email,
            password:securePass,
             
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

router.post("/loginuser",

body('email').isEmail(),
body('password',"Password length at least 5 character").isLength({ min: 5}),
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    let email=req.body.email;

//    res.send()

    try {
        let userData=  await  User.findOne({email});
        const comparepass= await bycrypt.compare(req.body.password,userData.password)
        if(!userData){
            return res.status(400).json({ errors: "Try login with correct credentials" });
        }
        if(!comparepass){
            return res.status(400).json({ errors: "Try login with correct credentials" });
        }

        const data={
            user:{
                id:userData.id
            }
        }

        const authToken=jwt.sign(data,"my#namenytayhsjsd$%hfmd^&shjsgdhs")
       
            return res.json({ success:true ,authToken});
        
        
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

module.exports=router;