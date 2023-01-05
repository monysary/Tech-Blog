const router = require('express').Router();
const { Comment } = require('../../models');

// Posting a comment route
router.post('/post', async (req, res) => {
    try {
        const dbNewComment = await Comment.create({
            content: req.body.commentContent,
            user_comment_id: req.session.userID,
            blog_id: req.body.commentBlogID
        })

        res.status(200).json()
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;