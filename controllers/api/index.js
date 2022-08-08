const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// /api/user
router.use('/user', userRoutes);

// /api/post
router.use('/post', postRoutes);

module.exports = router;