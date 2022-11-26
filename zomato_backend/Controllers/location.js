const locationData = require('../Models/locationData')

exports.getAllLocation= (req, res) => {

    locationData.find()
    .then(
        result=>
            res.status(200).json({
                message: "Successfully fatching all location",
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

