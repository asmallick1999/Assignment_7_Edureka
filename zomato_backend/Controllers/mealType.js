const mealTypeData = require('../Models/mealTypeData')

exports.getAllMealTypeData= (req, res) => {

    mealTypeData.find()
    .then(
        result=>
            res.status(200).json({
                message: "Successfully fatching all meal Type",
                data: result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:'DB error occured',
                error:error
            })
    )

}

