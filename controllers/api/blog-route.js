const router = require('express').Router();
const { BlogEntry } = require('../../models');

// Posting a new blog route
router.post('/post', async (req, res) => {
    try {
        const dbNewBlog = await BlogEntry.create({
            title: req.body.newBlogTitle,
            content: req.body.newBlogContent,
            user_id: req.session.userID
        })

        res.status(200).json()
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Deleting a blog route
router.delete('/delete/:id', async (req,res) => {
    try {
        BlogEntry.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json()
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;