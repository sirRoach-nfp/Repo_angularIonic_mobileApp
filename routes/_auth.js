const router = require("express").Router();
const User = require("../models/_users")
const CryptoJS = require("crypto-js")




router.post("/register",async (req,res)=> {

    console.log(req.body);

    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })


    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){res.status(500).json(err)}



})



router.post("/login", async(req,res)=>{

    try{
        const user = await User.findOne({username: req.body.username, password: req.body.password});

        if(!user){
            return res.status(401).json("Wrong Credentials");
        }

        if(user.password !== req.body.password){
            return res.status(400).json("Wrong Credentials");
        }
        return res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }


})


module.exports = router