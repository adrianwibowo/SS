// module.exports = (err, req, res, next) => {
//     if (err) {
//       if (err.status) {
//         res.status(err.status).json({
//           success: false,
//           message: err.message,
//         });
//       } else if (err.response && err.response.data) {
//         res.status(500).json({
//           success: false,
//           message: err.response.data.error,
//         });
//       } else {
//         res.status(500).json({
//           success: false,
//           message: err.message,
//         });
//       }
//     }
//   };


const success = (msg,data) => ({
    status: "success",
    message: msg,
    data
})

const error = (err) => ({
    status: "fail",
    errors: err
})

const errHandler = (err, res) => {
    console.log("THE ERROR =>  ", err)

    if (err.message == "Cannot delete or update a parent row: a foreign key constraint fails") {
        res.status(400).json(
            error("You need to delete related data first!")
        )
    }
    else if (err.name == 'SequelizeUniqueConstraintError' || err.name == 'SequelizeValidationError') {
        res.status(400).json(
            error(err.errors[0].message)
        )
    }
    else {
        res.status(400).json(
            error(err.message)
        )
    }
}

const finalError = [
    function (req, res, next) {
        res.status(404).json(
            error("Page Not Found!"))
    },

    function (err, req, res, next) { //try res.render without any views will thrown here
        if (res.statusCode == 200) res.status(500).json(
            error("Internal Server Error")
        )
    }
]

module.exports = {
    error,
    success,
    errHandler,
    finalError
}