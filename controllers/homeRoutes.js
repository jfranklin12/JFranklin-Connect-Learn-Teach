const router = require('express').Router();
const { User } = require('../models')

router.get('/:id', async (req, res) => {
    try {
        const UserInfo = await User.findByPk(req.params.id);

        const serializedUserData = UserInfo.get({ plain:true });

        res.status(200).json(UserInfo);
        res.render('home', UserInfo);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;