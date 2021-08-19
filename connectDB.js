//require mongoose
const mongoose = require("mongoose");

//connect db
const connect = async () => {
 try {
  await  mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
      )
      console.log("database connected...")
 } catch(error){
console.log("can note connect !!!")
 }
}

module.exports = connect;
