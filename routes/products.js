const express = require('express');
const router = express.Router();
const data = require('../db.json'); 

router.get('/', (req, res) => {
    res.json(data.products);
});

module.exports = router;