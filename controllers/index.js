const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// /
router.use('/', homeRoutes);

// /api
router.use('/api', apiRoutes);

module.exports = router;