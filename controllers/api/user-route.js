const router = require('express').Router();
const { User } = require('../../models');

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
            req.session.loggedIn = true;
            res.status(200).json({ message: 'Login success' });
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;