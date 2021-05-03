const router = require('express').Router();
const NYTimes = require('../apps/controllers/NYTimes');

router.get('/', NYTimes.searchData) 
// router.get('/', NYTimes.GetAll) 
// router.get('/:id', NYTimes.GetOne) 
// router.put('/:id', NYTimes.Update)
// router.delete('/:id', NYTimes.Delete) 

module.exports = router