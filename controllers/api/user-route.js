const router = require('express').Router();
const { User } = require('../../models');

// Login route
router.post('/login', async (req, res) => {
    try {
        const dbUser = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!dbUser) {
            res.status(400).json({ message: 'Incorrect email'});
            return;
        }
        
        const validPassword = await dbUser.checkPassword(req.body.password);
        
        if (!validPassword){
            res.status(400).json({ message: 'Incorrect password'});
            return;
        }

        req.session.save(() => {
            req.session.userID = dbUser.id;
            req.session.loggedIn = true;
            res.status(200).json({ message: 'Login success' });
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// New user sign up route
router.post('/signup', async (req, res) => {
    try {
        const dbNewUser = await User.create({
            username: req.body.signUpUser,
            email: req.body.signUpEmail,
            password: req.body.signUpPassword
        })

        req.session.save(() => {
            req.session.userID = dbNewUser.id;
            req.session.loggedIn = true;
            res.status(200).json(dbNewUser);
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// User logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;