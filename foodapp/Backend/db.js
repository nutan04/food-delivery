const mongoose = require('mongoose');
const mongoUrl="mongodb://0.0.0.0:27017/gofood";
const mongoDB=async () => {
    try {
        // mongoose.set('strictQuery', false)
      await  mongoose.connect(mongoUrl) 
        console.log('Mongo connected successfully')
        const fetch_data=await mongoose.connection.db.collection("food");
        fetch_data.find({}).toArray(function(err,data){
            if(err){
                console.log(err);
            }else{
                // console.log(data);
                console.log();
            }
        })
    } catch(error) {
        console.log(error)
        process.exit()
    }
}



module.exports=mongoDB;