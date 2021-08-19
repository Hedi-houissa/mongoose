
// require mongoose
const mongoose = require ('mongoose')
//create schema
const {Schema }= mongoose
// create instance schema
const personSchema = new Schema({
    name:{
        type : String,
        require : true
    },
    favoritFood : {
        type : []
    },
    age : Number
})

module.exports = Person = mongoose.model('person',personSchema)