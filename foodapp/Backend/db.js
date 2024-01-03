const mongoose = require('mongoose');
const mongoUrl="mongodb://0.0.0.0:27017/gofood";
const mongoDB=async () => {
    try {
        // mongoose.set('strictQuery', false)
      await  mongoose.connect(mongoUrl) 
        console.log('Mongo connected successfully')
        const fetch_data=await mongoose.connection.db.collection("food");
        fetch_data.find({}).toArray(async function(err,data){
            const foodCategory=await mongoose.connection.db.collection("foodcategory")
            foodCategory.find({}).toArray( function(err,catData){
            if(err){
                console.log(err);
            }else{
             global.food_item=data
            global.food_category=catData

                console.log();
            }
            })
        })
    } catch(error) {
        console.log(error)
        process.exit()
    }
}



module.exports=mongoDB;