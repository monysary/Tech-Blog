const router = require('express').Router();

const userRoutes = require('./user-route');
const commentRoutes = require('./comment-route');
const newBlogRoutes = require('./post-blog-route');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blog', newBlogRoutes);

module.exports = router;