  
const router = require('express').Router()
NYT = require('./NYTimesRouter')

router.use('/NYT', NYT)
router.get('/', function(req, res, next) {
      res.send('<h1> <strong>Hello SoftwareSeni! 👋</strong> </h1>');
    });

module.exports = router