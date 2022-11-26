const { default: mongoose, model } = require("mongoose");

const mealTypeSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('MealType', mealTypeSchema, 'mealtype')