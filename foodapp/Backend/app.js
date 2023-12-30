const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const mongoDB=require("./db");
mongoDB();
app.get("/",(req,res)=>{
    res.send("hi I am live");
});

const start =async()=>{
    try {
        app.listen(PORT,()=>{
           console.log(`${PORT} Yes I am Connected Thank you`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()