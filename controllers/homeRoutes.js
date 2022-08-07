const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const UserInfo = await User.findByPk(req.params.id);

        const serializedUserData = UserInfo.get({ plain:true });
        console.log(serializedUserData);

        res.render('home', serializedUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;