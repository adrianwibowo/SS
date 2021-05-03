
const router = require('express').Router(),
  article = require('./NYTimesArticleRouter'),
  book = require('./NYTimesBookRouter')


router.use('/article', article)
router.use('/book', book)

router.get('/', function (req, res, next) {
  res.send('<h1> <strong>Hello SoftwareSeni! 👋</strong> </h1>');
});

module.exports = router