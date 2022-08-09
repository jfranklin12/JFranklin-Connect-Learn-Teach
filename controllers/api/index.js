const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

// /api/user
router.use('/user', userRoutes);

// /api/post
router.use('/post', postRoutes);

// /api/post
router.use('/comment', commentRoutes);

module.exports = router;