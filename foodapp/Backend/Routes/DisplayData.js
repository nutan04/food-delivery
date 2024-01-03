const express=require("express");
const router=express.Router();


router.post("/foodData",async(req,res)=>{
    try {
        
        res.send([global.food_item,global.food_category])
    } catch (error) {
        console.log(error.message);
        console.log("server error");
    }

})

module.exports=router;