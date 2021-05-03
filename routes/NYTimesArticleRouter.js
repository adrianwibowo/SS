const router = require('express').Router();
const article = require('../apps/controllers/articleController');

router.get('/', article.searchData) 
router.get('/detail/', article.getSpecific)  


module.exports = router