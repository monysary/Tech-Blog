const router = require('express').Router();
const { BlogEntry, User } = require('../models')

// Render homepage with all blog posts
router.get('/', async (req, res) => {
    try {
        const blogData = await BlogEntry.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        
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
    res.render('login', { loggedIn: req.session.loggedIn })
})

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn })
})

module.exports = router;