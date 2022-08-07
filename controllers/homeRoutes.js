const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('I am the homeRoutes file!');
});

module.exports = router;