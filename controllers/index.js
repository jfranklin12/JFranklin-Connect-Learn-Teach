const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Working!');
});

module.exports = router;