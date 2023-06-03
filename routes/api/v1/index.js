const express = require('express');
const router = express.Router();

router.use('/questions', require('./questions')); // do hai ek questions and ek options
router.use('/options', require('./options'));

module.exports = router;