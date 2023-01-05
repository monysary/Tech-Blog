const router = require('express').Router();

const userRoutes = require('./user-route');
const commentRoutes = require('./comment-route');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;