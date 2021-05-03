const router = require('express').Router();
const book = require('../apps/controllers/bookController');


router.get('/', book.searchBook) 
 

module.exports = router