const express = require('express');
const router = express.Router();
const data = require('../db.json'); 

router.get('/', (req, res) => {
    res.json(data.products);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Fetching product with id:', id);
    const product = data.products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).end();
    }
}
);

module.exports = router;