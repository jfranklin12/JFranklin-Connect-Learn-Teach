const router = require('express').Router();
const { User } = require('../../models');

// Create new user with /api.user
router.post('/', async (req, res) => {
    try {
        const dbUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        res.status(200).json(dbUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;