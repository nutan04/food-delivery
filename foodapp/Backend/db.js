const mongoose = require('mongoose');
const mongoUrl="mongodb://localhost:27017/gofood";
const mongoDB=async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.mongoUrl) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}



module.exports=mongoDB;