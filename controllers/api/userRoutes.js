const router = require('express').Router();
const { User } = require('../../models');

// Create new user with /api/user
// Signup
router.post('/', async (req, res) => {
    try {
        const dbUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.logged_in = true;
            res.status(200).json(dbUser);
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const dbUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!dbUser) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!' });
            return;
        }

        const validPassword = await dbUser.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUser.id;
            req.session.logged_in = true;
            res.status(200).json({ message: 'You are now loggen in!'});
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const UserInfo = await User.findByPk(req.params.id);

        res.status(200).json(UserInfo);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;