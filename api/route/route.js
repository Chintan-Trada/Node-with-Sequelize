const express = require('express');
const router = express.Router();

router.use('/category', require('./routes/category.route'));
router.use('/portfolio', require('./routes/portfolio.route'));
router.use('/enquiry', require('./routes/enquiry.route'));
router.use('/testnomial', require('./routes/testnomial.route'));
router.use('/users', require('./routes/user.route'));


module.exports = router