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

        res.status(200).json(dbUser);
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