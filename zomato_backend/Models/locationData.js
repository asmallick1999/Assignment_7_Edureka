const { default: mongoose, model } = require("mongoose");

const locationSchema =  mongoose.Schema(
    {
        _id:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        city_name:{
            type:String,
            require:true
        },
        locality_id:{
            type:String,
            require:true
        },
        country_name:{
            type:String,
            require:true
        }
    }
)

module.exports = mongoose.model('Location',locationSchema,'location')