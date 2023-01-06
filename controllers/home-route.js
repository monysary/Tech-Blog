const router = require('express').Router();
const { BlogEntry, User, Comment } = require('../models')

// Render homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await BlogEntry.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        
        const allBlogData = blogData.map((blog) => 
            blog.get({ plain: true })
        );

        res.render('homepage', { allBlogData, loggedIn: req.session.loggedIn });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
})

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup');
})

// Render specific post
router.get('/posts/:id', async (req, res) => {
    try {
        const blogData = await BlogEntry.findByPk(req.params.id, {
            include: [
                User, 
                {
                    model: Comment,
                    include: [User]
                }
            ]
        });

        if (blogData) {
            const oneBlogData = blogData.get({ plain: true });
            res.render('blog-post', { oneBlogData, loggedIn: req.session.loggedIn });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Render the user's dashboard
router.get('/dashboard', async (req, res) => {
    try {
        const userBlogData = await BlogEntry.findAll({
            where: {
                user_id: req.session.userID
            }
        });

        const userBlog = userBlogData.map((blog) => 
            blog.get({ plain: true })
        )

        res.render('dashboard', { userBlog, userBlogData, loggedIn: req.session.loggedIn })

    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
})

module.exports = router;