const express = require('express');
const router = express.Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;