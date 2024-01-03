const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const mongoDB=require("./db");
mongoDB().then(()=>{
    app.get("/",(req,res)=>{
        res.send("hi I am live hello");
    });
    app.use((req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
        res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
        );
        next()
    })
     app.use(express.json());
    app.use("/api",require("./Routes/CreateUser"));
    app.use("/api",require("./Routes/DisplayData"));

    
    // const start =async()=>{
    //     try {
            app.listen(PORT,()=>{
               console.log(`${PORT} Yes I am Connected Thank you`);
            })
        // } catch (error) {
        //     console.log(error);
        // }
    // }
});

// start()