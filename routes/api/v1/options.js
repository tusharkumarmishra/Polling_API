const express = require('express');
const router = express.Router();

const optionsApi = require('../../../controllers/api/v1/options_api');

router.delete('/:id/delete', optionsApi.deleteOption);
router.post('/:id/addVote', optionsApi.addVote);

module.exports = router;